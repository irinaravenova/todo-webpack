let projectList = [];

export default function createProject(name) {
    const newProject = name
    projectList.push(newProject)
    console.log(projectList)
    return newProject    
}

export { projectList }