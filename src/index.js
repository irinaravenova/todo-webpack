import createTodo from "./createTodo";
import allTodos from "./createTodo";
import createProject from "./createProject";
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";
import renderAll from "./renderAll";
import './style.css';

// ** renderX_____.js functions are DOM manipulation modules

// ** TEST TODOS ** //
const testTask = createTodo('Today', 'Bake cakes', 'chocolate', 'tomorrow', 'high', 'n/a', true)
const testTask1 = createTodo('Tomorrow', 'Bake pies', 'chocolate', 'tomorrow', 'high', 'n/a', false)
const testTask2 = createTodo('Yesterday', 'Bake brownies', 'chocolate', 'tomorrow', 'high', 'n/a', true)
const testTask3 = createTodo('Today', 'Bake cookies', 'vanilla', 'tomorrow', 'low', 'n/a', true)
const testProject = createProject('Today')
const testProject1 = createProject('Tomorrow')
const testProject2 = createProject('Yesterday')

// ** END TEST TODOS ** //

// Get DOM elements
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const content = document.querySelector('.content')

// Create New Project button
const createProjectButton = document.createElement('button')
createProjectButton.className = "create-project-button"
createProjectButton.innerHTML = "Create New Project"
sidebar.appendChild(createProjectButton)







renderAll()


const listAllTodos = document.createElement('button')
listAllTodos.className = "all-projects-button"
listAllTodos.innerHTML = "All"
sidebar.appendChild(listAllTodos)
listAllTodos.addEventListener('click', (e) => {
    e.preventDefault()
    renderAll()
})



renderProjects()
renderTodos()





















