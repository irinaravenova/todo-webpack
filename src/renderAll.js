import { allTodos } from "./createTodo"

export default function renderAll() { 

    // First clear contents of whatever is in the main content area (avoids repetition of object listing)
    const contentBox = document.querySelector('.content')
    contentBox.replaceChildren()

    // Iterate through array of objects to find matching project name property
    allTodos.forEach(element => {

        // Create div container for the Todo object and assign class to it
        const toDoContainer = document.createElement('div')
        toDoContainer.className = "todo-div"

        // **** ToDo object render, still needs formatting ****
        const toDoTitle = document.createElement('p')
        toDoTitle.innerHTML = `${element.title}`

        const toDoDescription = document.createElement('p')
        toDoDescription.innerHTML = `${element.description}`

        // Checkbox to toggle completion of task
        const checkBox = document.createElement('INPUT')
        checkBox.setAttribute("type", "checkbox")

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
        option3.text = "High"
        priorityRange.options.add(option3)

        // Delete button
        // const deleteTodo = document.createElement('button')
        // deleteTodo.innerHTML = "X"

        // Append new elements to toDo container
        // toDoContainer.appendChild(deleteTodo)
        toDoContainer.appendChild(toDoTitle)
        toDoContainer.appendChild(toDoDescription)
        toDoContainer.appendChild(priorityRange)
        toDoContainer.appendChild(checkBox)
        contentBox.appendChild(toDoContainer)
    })
}