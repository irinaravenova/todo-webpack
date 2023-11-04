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

            // Iterate through array of objects to find matching project name property
            allTodos.forEach(element => {
                if ((element.project.toUpperCase()) == projectName.toUpperCase()) {
                    console.log(element)

                    // TODO: Insert logic where matching todos are rendered to the content div container 





                    


                }
            })
        })
    })
}