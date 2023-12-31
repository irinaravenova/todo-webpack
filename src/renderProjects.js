import renderTodos from "./renderTodos";

export default function renderProjects() {

    const sidebarSub = document.querySelector('.sidebar-sub-2')
    sidebarSub.replaceChildren()

    if (localStorage.getItem("projectArray") === "") {
        console.log("EMPTY PROJECT ARRAY")
    }   
    
    else {
        let projects = JSON.parse(localStorage.getItem("projectArray"))
        projects.forEach(project => {

            if (project != "All") {
                const projectButton = document.createElement("button")
                projectButton.className = "project-button"
                projectButton.innerHTML = `${project}`
    
                projectButton.addEventListener('click', () => {
                    // Render corresponding todos where the project name matches that project.
    
                    const contentBox = document.querySelector('.content')
                    contentBox.replaceChildren()
        
                    const projectTitle = document.createElement('h1')
                    projectTitle.innerHTML = project
                    contentBox.appendChild(projectTitle)
                    
                    // Pass project name to renderTodo function to get corresponding todos that match
                    renderTodos(project)

                })
                   
                sidebarSub.appendChild(projectButton)
            }


        })
    }

    

}