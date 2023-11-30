import createTodo from "./createTodo";
import allTodos from "./createTodo";
import createProject from "./createProject";
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

// localStorage.clear();




// ** END TEST TODOS ** //



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
    // let newTodoObject = createTodo(project, title, description, dueDate, priority, notes, checkList)

    
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





















