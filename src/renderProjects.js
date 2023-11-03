import { projectList } from "./createProject"

export default function renderProjects() {

    const sidebar = document.querySelector('.sidebar')

    projectList.forEach((project) => {
        const projectButton = document.createElement("button")
        projectButton.className = "project-button"
        projectButton.innerHTML = `${project}`
        sidebar.appendChild(projectButton)

        // Add event listener to each project button
        // that will display associated todos attached.




        

        
    })

}