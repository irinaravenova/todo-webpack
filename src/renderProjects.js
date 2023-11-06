import { projectList } from "./createProject"

export default function renderProjects() {

    const sidebar = document.querySelector('.sidebar')

    projectList.forEach((project) => {
        const projectButton = document.createElement("button")
        projectButton.className = "project-button"
        projectButton.innerHTML = `${project}`
        sidebar.appendChild(projectButton)
        
    })

}