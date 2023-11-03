import { projectList } from "./createProject";
import { allTodos } from "./createTodo";

export default function renderTodos() {
    // Render todos where the project name is selected

    const sidebar = document.querySelector('.sidebar')
    const listOfProjectButtons = document.querySelectorAll('.project-button')

    listOfProjectButtons.forEach((projectButton) => {
        projectButton.addEventListener('click', () => {
            console.log(`${projectButton.innerHTML}`)

        })
    })


}