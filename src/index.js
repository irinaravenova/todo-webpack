import createTodo from "./createTodo";
import { allTodos } from "./createTodo";
import createProject from "./createProject";
import { projectList } from "./createProject"
import renderProjects from "./renderProjects";
import renderAll from "./renderAll";
import './style.css';
import { format } from 'date-fns';

// Checks for empty localStorage
// Creates a default projectArray that references "All" todos or todos with unspecified projects.
if (localStorage.getItem("projectArray") === null) {
    localStorage.setItem("projectArray", JSON.stringify(["All"]))
    renderProjects()
}






// Get DOM elements
const sidebar = document.querySelector('.sidebar')
const sidebarSub = document.querySelector('.sidebar-sub-1')
const header = document.querySelector('.header')
const content = document.querySelector('.content')
const addTodoForm = document.getElementById('addTodoForm')
const addProjectForm = document.getElementById('add-project-form')


// Create New Task button
const createNewTodo = document.createElement('button')
createNewTodo.className = "create-task-button"
createNewTodo.innerHTML = "Create Todo"
sidebarSub.appendChild(createNewTodo)

// Create New Project button
const createProjectButton = document.createElement('button')
createProjectButton.className = "create-project-button"
createProjectButton.innerHTML = "Create Project"
sidebarSub.appendChild(createProjectButton)


// EVENT LISTENERS 

// Create new Todo button listener
createNewTodo.addEventListener('click', () => {
    addTodoForm.showModal()
})

// Create new Project button listener
createProjectButton.addEventListener('click', () => {
    addProjectForm.showModal()
})


// Submit new todo form event listener
document.getElementById('submit-todo').addEventListener('click', function(e) {
    e.preventDefault()
    let project = document.getElementById('project').value
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let dueDate = document.getElementById('duedate').value
    let priority = document.getElementById('priority').value
    let notes = document.getElementById('notes').value
    let checkList = document.getElementById('checklist').value
    let newTodoObject = createTodo(project, title, description, dueDate, priority, notes, checkList)
    allTodos.push(newTodoObject)
    renderAll()
    // Clear input values upon submission
    let inputs = document.querySelectorAll("input")
    inputs.forEach(input => input.value = "")
    
    addTodoForm.close()
})

// Submit new project form event listener
document.getElementById("submit-project").addEventListener('click', function(e) {
    e.preventDefault()
    let newProjectName = document.getElementById('project-entry').value
    if ((projectList.indexOf(`${newProjectName}`)) == -1) {
        createProject(newProjectName)
        let option = document.createElement("option")
        option.textContent = newProjectName
        projectSelect.appendChild(option)

        // Clear input after submission
        let inputs = document.querySelectorAll("input")
        inputs.forEach(input => input.value = "")

        addProjectForm.close()

    }
    else {
        alert("Project already exists.")
        return
    }
})





// Lists all todos as default upon intial page load
const listAllTodos = document.createElement('button')
listAllTodos.className = "all-projects-button"
listAllTodos.innerHTML = "All Tasks"
sidebarSub.appendChild(listAllTodos)

listAllTodos.addEventListener('click', (e) => {
    e.preventDefault()
    renderAll()
})


// ** The following loops are added in index.js so that they are not...
// ...executed more than once after page rendering.
// If they are placed in the function module event listeners, they
// start overpopulating the select options on project button clicking.

// Render project list as options on create new todo form, 
let projectSelect = document.getElementById("project")
let projectSelectNew = document.getElementById('new-project')
let storedProjectArray = JSON.parse(localStorage.getItem("projectArray"))

for (let i = 0; i < storedProjectArray.length; i++) {
        let option = document.createElement("option")
        option.textContent = storedProjectArray[i]
        projectSelect.appendChild(option)
    }
   
// And edit todo form. 
for (let i = 0; i < storedProjectArray.length; i++) {
    let option = document.createElement("option")
    option.textContent = storedProjectArray[i]
    projectSelectNew.appendChild(option)
}

renderAll()
renderProjects()

const exampleDate = '2024-01-30'
let newExample = exampleDate.replaceAll("-", '/')
console.log(newExample)


const date1 = format(
    `${newExample}`,
    'MMMM d yyyy',
    new Date()
)

console.log(date1)



