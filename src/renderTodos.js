import { allTodos } from "./createTodo";

export default function renderTodos() {
    // Render todos where the project name is selected

    const sidebar = document.querySelector('.sidebar')
    const listOfProjectButtons = document.querySelectorAll('.project-button')

    listOfProjectButtons.forEach((projectButton) => {
        projectButton.addEventListener('click', () => {

            // Assign project name to variable
            let projectName = projectButton.innerHTML
            console.log(projectName)

            // Get content box and clear contents upon each project click
            const contentBox = document.querySelector('.content')
            contentBox.replaceChildren()

            // Iterate through array of objects to find matching project name property
            allTodos.forEach(element => {
                if ((element.project.toUpperCase()) == projectName.toUpperCase()) {
                    // Test to make sure objects are being retreived properly
                    console.log(element)

                    // Create div container for the Todo object and assign class to it
                    const toDoContainer = document.createElement('div')
                    toDoContainer.className = "todo-div"

                    // **** ToDo object render, still needs formatting ****
                    const toDoContent = document.createElement('p')
                    toDoContent.innerHTML = `${element.title} + ${element.description}`

                    toDoContainer.appendChild(toDoContent)
                    contentBox.appendChild(toDoContainer)
                }
            })
        })
    })
}