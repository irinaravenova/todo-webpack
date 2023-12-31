import { allTodos } from "./createTodo";

export default function renderTodos(project) {
    // Takes in project name and iterates through localstorage to find matches
    // Based on array of matches, renders matching toDos to page

    const contentBox = document.querySelector('.content')
    contentBox.replaceChildren()

    const projectTitle = document.createElement('h1')
    projectTitle.innerHTML = `${project}`
    contentBox.appendChild(projectTitle)

    let matchingTodos = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) == localStorage.getItem("projectArray")) {
            continue
        }
        else if (project == JSON.parse(localStorage.getItem(localStorage.key(i))).project) {
            
            let toDoMatch = JSON.parse(localStorage.getItem(localStorage.key(i)))
            matchingTodos.push(toDoMatch)
            
            const toDoContainer = document.createElement('div')
            toDoContainer.className = "todo-div"

            // **** ToDo object render, still needs formatting ****
            const toDoTitle = document.createElement('p')
            toDoTitle.innerHTML = `${toDoMatch.title}`

            const toDoDescription = document.createElement('p')
            toDoDescription.innerHTML = `${toDoMatch.description}`
            
            const toDoProject = document.createElement('p')
            toDoProject.innerHTML = `${toDoMatch.project}`

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
            toDoContainer.appendChild(toDoProject)
            toDoContainer.appendChild(toDoDescription)
            toDoContainer.appendChild(priorityRange)
            toDoContainer.appendChild(checkBox)
            contentBox.appendChild(toDoContainer)
        }
    }
}

