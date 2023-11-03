import createTodo from "./createTodo";
import allTodos from "./createTodo";
import createProject from "./createProject";
import renderProjects from "./renderProjects";
import renderTodos from "./renderTodos";
import './style.css';
import { all } from "axios";

// ** REMEMBER TO RE-RUN WEBPACK UPON NEW WORK SESSION
// ** THEN RE-RUN WEBPACK WATCH TO AUTO UPDATE LIVE SERVER UPON EACH NEW SAVE

// ** renderX_____.js functions are DOM manipulation modules

// Get DOM elements
const sidebar = document.querySelector('.sidebar')
const header = document.querySelector('.header')
const content = document.querySelector('.content')

// Create project button
const createProjectButton = document.createElement('button')
createProjectButton.innerHTML = "Create New Project"
sidebar.appendChild(createProjectButton)


// TEST SUBJECTS
const testTask = createTodo('today', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', true)
const testTask1 = createTodo('tomorrow', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', false)
const testTask2 = createTodo('yesterday', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', true)
console.log(testTask)
console.log(testTask1)
console.log(testTask2)

const testProject = createProject('Today')
const testProject1 = createProject('tomorrow')
const testProject2 = createProject('yesterday')

renderProjects()
renderTodos()
console.log(`${allTodos}`)




// Sidebar div
// const sideBar = document.createElement('div')
// sideBar.className = "sidebar"
// document.body.appendChild(sideBar)
















