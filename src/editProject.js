import renderProjects from "./renderProjects"
import renderTodos from "./renderTodos"

export default function editProject(project, newProjectName) {

    // Get existing project array from localStorage
    const workingArray = JSON.parse(localStorage.getItem("projectArray"))
    console.log(workingArray)

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

            // Clear content box 
            const contentBox = document.querySelector('.content')
            contentBox.replaceChildren()

            // Create header div to hold project name and delete button, 
            const headerDiv = document.createElement('div')
            headerDiv.className = "project-header-div"

            // Create header title using project title
            const projectTitle = document.createElement('h1')
            projectTitle.innerHTML = `${newProjectName}`
            contentBox.appendChild(projectTitle)

            // Create "Edit" project button
            const editProjectButton = document.createElement('button')
            editProjectButton.innerHTML = "Edit"

            // Create "X" delete button
            const deleteProjectButton = document.createElement('button')
            deleteProjectButton.innerHTML = "X"


            // Add event listener to edit project button which calls editProject module
            editProjectButton.addEventListener('click', () => {
            
                // Open edit project name form modal upon clicking edit button
                const editProjectForm = document.getElementById('edit-project-form')
                editProjectForm.showModal()

                // On submitting new project name, pass old project name and new project name 
                // to editProject() module function.
                document.getElementById("edit-project").addEventListener('click', function(e) {
                    e.preventDefault()
                    editProject(project, document.getElementById("new-project-name").value)
                    editProjectForm.close()
                    location.reload()
                    
                })



            })

            // Add event listener to delete project button which calls deleteProject module.
            deleteProjectButton.addEventListener('click', () => {
                
                // Pass project name to module
                deleteProject(project)
                location.reload()
                

            })

            // And add them both to header div, then add header div to content box.
            headerDiv.appendChild(projectTitle)
            headerDiv.appendChild(editProjectButton)
            headerDiv.appendChild(deleteProjectButton)
            contentBox.appendChild(headerDiv)

            

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

        }
    }


    renderTodos(newProjectName) 
      
}