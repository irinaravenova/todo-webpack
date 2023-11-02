import { projectList } from "./createProject"

// Renders each project in project array to DOM

export default function renderProjects() {

    projectList.forEach((project) => {
        const projectName = document.createElement("p")
        projectName.innerHTML = `${project}`
        document.body.appendChild(projectName)
    })

}