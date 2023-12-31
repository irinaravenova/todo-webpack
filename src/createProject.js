import renderProjects from "./renderProjects";

let projectList = [];

export default function createProject(name) {
    const newProject = name

    if (localStorage.getItem("projectArray") === "") {
        let projects = [];
        projects.push(name)
        localStorage.setItem('projectArray', JSON.stringify(projects))
    }
    else {
        let storedProjectArray = JSON.parse(localStorage.getItem("projectArray"))
        storedProjectArray.push(newProject)
        localStorage.setItem('projectArray', JSON.stringify(storedProjectArray))
    }

   
    renderProjects()
}

export { projectList }