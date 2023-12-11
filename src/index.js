import createTodo from "./createTodo";
import { allTodos } from "./createTodo";
import createProject from "./createProject";
import { projectList } from "./createProject"
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";
import renderAll from "./renderAll";
import './style.css';

// ** renderX_____.js functions are DOM manipulation modules

// ** TEST TODOS ** //
const testTask = createTodo('Today', 'Bake cakes', 'chocolate', 'tomorrow', 'low', 'n/a', true)
const testTask1 = createTodo('Tomorrow', 'Bake pies', 'chocolate', 'tomorrow', 'high', 'n/a', false)
const testTask2 = createTodo('Yesterday', 'Bake brownies', 'chocolate', 'tomorrow', 'high', 'n/a', true)
const testTask3 = createTodo('Today', 'Bake cookies', 'vanilla', 'tomorrow', 'low', 'n/a', true)
const testProject = createProject('Today')
const testProject1 = createProject('Tomorrow')
const testProject2 = createProject('Yesterday')

// ** END TEST TODOS ** //

// Render project list as options on create new todo form
let projectSelect = document.getElementById("project")
for (let i = 0; i < projectList.length; i++) {
    let option = document.createElement("option")
    option.textContent = projectList[i]
    projectSelect.appendChild(option)
}



// Get DOM elements
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const content = document.querySelector('.content')
const addTodoForm = document.getElementById('addTodoForm')



// Create New Task button
const createNewTodo = document.createElement('button')
createNewTodo.className = "create-task-button"
createNewTodo.innerHTML = "Create Todo"
sidebar.appendChild(createNewTodo)
createNewTodo.addEventListener('click', () => {
    // Render form dialog box and call create Todo function onSubmit
    addTodoForm.showModal()
})

// On submission of toDoForm, create new toDo objection using Todo class constructor function
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault()

    // ** Create variables that hold the input values
    // ** Then use those variables to instatiate createTodo function
    // ** Call render todos and Alltodos functions to update page




    let project = document.getElementById('project').value




    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let dueDate = document.getElementById('duedate').value
    let priority = document.getElementById('priority').value
    let notes = document.getElementById('notes').value
    let checkList = document.getElementById('checklist').value
    let newTodoObject = createTodo(project, title, description, dueDate, priority, notes, checkList)
    console.log(newTodoObject)
    allTodos.push(newTodoObject)
    renderAll()



    // Close form
    addTodoForm.close()
})





// Create New Project button
const createProjectButton = document.createElement('button')
createProjectButton.className = "create-project-button"
createProjectButton.innerHTML = "Create Project"
sidebar.appendChild(createProjectButton)
createProjectButton.addEventListener('click', () => {
    // Render form dialog box and call create Project function onSubmit



})


renderAll()

// Lists all todos as default upon intial page load
const listAllTodos = document.createElement('button')
listAllTodos.className = "all-projects-button"
listAllTodos.innerHTML = "All Tasks"
sidebar.appendChild(listAllTodos)
listAllTodos.addEventListener('click', (e) => {
    e.preventDefault()
    renderAll()
})



renderProjects()
renderTodos()

//console.logs title of objects within localstorage successfully
for (var i = 0; i < localStorage.length; i++){
   let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(obj.title)

}


console.log(projectList)






