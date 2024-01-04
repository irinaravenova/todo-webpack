import renderTodos from "./renderTodos";
import deleteProject from "./deleteProject";

export default function renderProjects() {

    const sidebarSub = document.querySelector('.sidebar-sub-2')
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

                    // Clear content box 
                    const contentBox = document.querySelector('.content')
                    contentBox.replaceChildren()

                    // Create header div to hold project name and delete button, 
                    const headerDiv = document.createElement('div')
                    headerDiv.className = "project-header-div"

                    // Create header title using project title
                    const projectTitle = document.createElement('h1')
                    projectTitle.innerHTML = `${project}`
                    contentBox.appendChild(projectTitle)

                    // Create "X" delete button
                    const deleteProjectButton = document.createElement('button')
                    deleteProjectButton.innerHTML = "X"

                    // Add event listener to delete project button which calls deleteProject module.
                    deleteProjectButton.addEventListener('click', () => {
                        
                        // Pass project name to module
                        deleteProject(project)
                        // console.log(project)

                    })

                    // And add them both to header div, then add header div to content box.
                    headerDiv.appendChild(projectTitle)
                    headerDiv.appendChild(deleteProjectButton)
                    contentBox.appendChild(headerDiv)

                    // Then, pass project name to renderTodo function module,
                    renderTodos(project)

                    // Which will render the matching todo objects.
                })
                
                sidebarSub.appendChild(projectButton)


            }
        })
    }
}