import createTodo from "./createTodo";
import createProject from "./createProject";
import renderProjects from "./renderProjects";
import './style.css';

const testTask = createTodo('today', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', true)
console.log(testTask)


const testProject = createProject('Today')
const testProject1 = createProject('tomorrow')
const testProject2 = createProject('yesterday')

renderProjects();