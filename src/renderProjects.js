import renderTodos from "./renderTodos";
import deleteProject from "./deleteProject"
import editProject from "./editProject";

export default function renderProjects() {

    const sidebarSub = document.querySelector('.sidebar-sub-2')
    const projectHeader = document.getElementById('project-header')

    // Clear page contents
    sidebarSub.replaceChildren()


    // If the project array is empty, log out 
    if (localStorage.getItem("projectArray") === "") {
        console.log("EMPTY PROJECT ARRAY")
    }      
    else {
        // Iterate through local storage objects that are NOT the project array
        let projects = JSON.parse(localStorage.getItem("projectArray"))
        
        // For each project in the project array, 
        projects.forEach(project => {

            // For all projects which are not in the "All" category,
            if (project != "All") {
                
                // Create a project name button and append to sidebar.
                const projectButton = document.createElement("button")
                projectButton.className = "project-button"
                projectButton.innerHTML = `${project}`
    
                // When the project button in the sidebar is clicked, 
                projectButton.addEventListener('click', () => {

                    console.log("clicked")

                    // Clear project header
                    projectHeader.replaceChildren()

                    // Clear content box 
                    const contentBox = document.querySelector('.content')
                    contentBox.replaceChildren()
                    
                    


                    // Create header div to hold project name and delete button, 
                    // const headerDiv = document.createElement('div')
                    // headerDiv.className = "project-header-div"


                    

                    let projectTitle = document.createElement('h1')

                    projectTitle.innerHTML = `${project}`
                    projectHeader.appendChild(projectTitle)


                    // Create header title using project title
                    // const projectTitle = document.createElement('h1')
                    // projectTitle.innerHTML = `${project}`
                    // projectHeader.appendChild(projectTitle)

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
                        })

                    })


                    // Add event listener to delete project button which calls deleteProject module.
                    deleteProjectButton.addEventListener('click', () => {
                        
                        // Pass project name to module
                        deleteProject(project)
                        location.reload()

                    })

                    // And add them both to header div, then add header div to content box.
                    // headerDiv.appendChild(projectTitle)
                    projectHeader.appendChild(editProjectButton)
                    projectHeader.appendChild(deleteProjectButton)
                    // contentBox.appendChild(headerDiv)

                    // Then, pass project name to renderTodo function module,
                    renderTodos(project)

                    // Which will render the matching todo objects.
                })
                
                sidebarSub.appendChild(projectButton)
            }
        })
    }
}