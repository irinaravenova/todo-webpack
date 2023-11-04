let projectList = [];

export default function createProject(name) {
    const newProject = name
    projectList.push(newProject)
    return newProject    
}

export { projectList }