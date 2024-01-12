import { allTodos } from "./createTodo"

export default function renderAll() { 

    // First clear contents of whatever is in the main content area (avoids repetition of object listing)
    const contentBox = document.querySelector('.content')
    contentBox.replaceChildren()

    const projectTitle = document.createElement('h1')
    projectTitle.innerHTML = "All Tasks"
    contentBox.appendChild(projectTitle)

    if (localStorage.length == 1 ) {
        contentBox.appendChild(projectTitle)
        return
    }

   else {
    for (var i = 0; i < localStorage.length; i++){

        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        let key = localStorage.key(i)

        if (key == "projectArray") {
            continue
        }

        else {

       // Create div container for the Todo object and assign class to it
       const toDoContainer = document.createElement('div')
       toDoContainer.className = "todo-div"

       //   **** ToDo object render, still needs formatting ****
       const toDoTitle = document.createElement('p')
       toDoTitle.innerHTML = `${obj.title}`

       const toDoProject = document.createElement('p')
       toDoProject.innerHTML = `${obj.project}`

       const toDoDescription = document.createElement('p')
       toDoDescription.innerHTML = `${obj.description}`

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
       option3.text = "Low"
       priorityRange.options.add(option3)

       const deleteButton = document.createElement('button')
       deleteButton.innerHTML = "X"
       deleteButton.addEventListener('click', () => {                

           // Removes todo object from localstorage using the key
           localStorage.removeItem(key)

           // Removes the todo Div container from page
           contentBox.removeChild(toDoContainer)

       })

       toDoContainer.appendChild(checkBox)
       toDoContainer.appendChild(toDoTitle)
       toDoContainer.appendChild(toDoProject)
       toDoContainer.appendChild(toDoDescription)
       toDoContainer.appendChild(priorityRange)
       toDoContainer.appendChild(deleteButton)
       contentBox.appendChild(toDoContainer)
        }


    }
   }
}