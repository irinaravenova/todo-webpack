import createTodo from "./createTodo";
import createProject from "./createProject";
import './style.css';

const testTask = createTodo('today', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', true)
console.log(testTask)


const testProject = createProject('Today')
console.log(testProject)

