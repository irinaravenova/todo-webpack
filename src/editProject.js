import renderProjects from "./renderProjects"
import renderTodos from "./renderTodos"
import renderAll from "./renderAll"

export default function editProject(project, newProjectName) {



    // Get existing project array from localStorage
    const workingArray = JSON.parse(localStorage.getItem("projectArray"))
    console.log(workingArray)

    const contentBox = document.querySelector('.content')
    const projectHeader = document.querySelector('.project-header')

    // Iterate through projectArray from LS...
    for (let i = 0; i < workingArray.length; i++) {

        // And find project name match in the array.
        // If it is a match...
        if (workingArray[i] === project) {

            // Delete the old project name and replace it with the new one at the same index in the array.
            const updatedProjectArray = workingArray.toSpliced(i, 1, newProjectName)
            console.log(updatedProjectArray)

            // Set updated project array to local storage.
            localStorage.setItem("projectArray", JSON.stringify(updatedProjectArray))

            renderProjects()

            // Clear content box 
            // const contentBox = document.querySelector('.content')
            contentBox.replaceChildren()

            // const projectHeader = document.querySelector('.project-header')
            projectHeader.replaceChildren()

            // Create header div to hold project name and delete button, 
            // const headerDiv = document.createElement('div')
            // headerDiv.className = "project-header-div"

            // // Create header title using project title
            const projectTitle = document.createElement('h1')
            projectTitle.innerHTML = `${newProjectName}`
            projectHeader.appendChild(projectTitle)

            // // Create "Edit" project button
            const editProjectButton = document.createElement('button')
            editProjectButton.innerHTML = "Edit"

            // // Create "X" delete button
            const deleteProjectButton = document.createElement('button')
            deleteProjectButton.innerHTML = "X"


            // Add event listener to edit project button which calls editProject module
            editProjectButton.addEventListener('click', () => {
            
                // Open edit project name form modal upon clicking edit button
                const editProjectForm = document.getElementById('edit-project-form')
                editProjectForm.showModal()

                let projectSelectNew = document.getElementById('new-project')
                let storedProjectArray = JSON.parse(localStorage.getItem("projectArray"))
            
                for (let i = 0; i < storedProjectArray.length; i++) {
                    let option = document.createElement("option")
                    option.textContent = storedProjectArray[i]
                    projectSelectNew.appendChild(option)
                }

                // On submitting new project name, pass old project name and new project name 
                // to editProject() module function.
                document.getElementById("edit-project").addEventListener('click', function(e) {
                    e.preventDefault()
                    editProject(project, document.getElementById("new-project-name").value)
                    editProjectForm.close()
                    location.reload()
                    renderAll()
                    
                })



            })

            // Add event listener to delete project button which calls deleteProject module.
            deleteProjectButton.addEventListener('click', () => {
                
                // Pass project name to module
                deleteProject(project)
                location.reload()
                renderAll()

                

            })

            // And add them both to header div, then add header div to content box.
            // headerDiv.appendChild(projectTitle)
            projectHeader.appendChild(editProjectButton)
            projectHeader.appendChild(deleteProjectButton)
            // contentBox.appendChild(headerDiv)

            

            // Break out of the loop.
            break 
        }
    }


    // Iterate through localStorage to find todos with matching old project names.
    for (let j = 0; j < localStorage.length; j++) {

        let objectKey = localStorage.key(j)
        let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(j)))

        // Test for object and keys being assigned correctly.
        // console.log(toDoObject)     
        // console.log(objectKey)

        // If the localstorage object is the projectArray, pass it.
        if (localStorage.key(j) == "projectArray") {
            continue
        }

        // Else, if the project value of the todo object matches old one,
        else if (toDoObject.project === project) {
            toDoObject.project = `${newProjectName}`  
            
            // Change project names of todo objects and update them in localstorage.
            localStorage.setItem(objectKey, JSON.stringify(toDoObject))
            // renderAll()
        }
    }


    renderTodos(newProjectName) 
      location.reload()
}