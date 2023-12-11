import { allTodos } from "./createTodo";

export default function renderTodos() {
    // Render todos when the associated project name is selected

    const sidebar = document.querySelector('.sidebar')
    const listOfProjectButtons = document.querySelectorAll('.project-button')

    listOfProjectButtons.forEach((projectButton) => {
        projectButton.addEventListener('click', () => {

            // Assign project name to variable
            let projectName = projectButton.innerHTML

            // Get content box and clear contents upon each project click
            const contentBox = document.querySelector('.content')
            contentBox.replaceChildren()

            const projectTitle = document.createElement('h1')
            projectTitle.innerHTML = projectName
            contentBox.appendChild(projectTitle)

            // Iterate through array of objects to find matching project name property
            allTodos.forEach(element => {
                if ((element.project.toUpperCase()) == projectName.toUpperCase()) {

                    // Create div container for the Todo object and assign class to it
                    const toDoContainer = document.createElement('div')
                    toDoContainer.className = "todo-div"

                    // **** ToDo object render, still needs formatting ****
                    const toDoTitle = document.createElement('p')
                    toDoTitle.innerHTML = `${element.title}`

                    const toDoDescription = document.createElement('p')
                    toDoDescription.innerHTML = `${element.description}`
                    
                    // Priority range dropdown menu
                    const priorityRange = document.createElement('select')
                    let option1 = document.createElement("option")
                    option1.value =1;
                    option1.text = "High"
                    priorityRange.options.add(option1)

                    let option2 = document.createElement("option")
                    option2.value = 2;
                    option2.text = "Medium"
                    priorityRange.options.add(option2)

                    let option3 = document.createElement("option")
                    option3.value = 3;
                    option3.text = "Low"
                    priorityRange.options.add(option3)

                    // Checkbox to toggle completion of task
                    const checkBox = document.createElement('INPUT')
                    checkBox.setAttribute("type", "checkbox")

                    toDoContainer.appendChild(toDoTitle)
                    toDoContainer.appendChild(toDoDescription)
                    toDoContainer.appendChild(priorityRange)
                    toDoContainer.appendChild(checkBox)
                    contentBox.appendChild(toDoContainer)
                }
            })
        })
    })
}


