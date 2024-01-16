import { allTodos } from "./createTodo";


// Get project name passed in from renderProjects module function.
export default function renderTodos(project) {

    const contentBox = document.querySelector('.content')
    // contentBox.replaceChildren()

    let matchingTodos = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == "projectArray") {
            continue
        }
        else if (project == JSON.parse(localStorage.getItem(localStorage.key(i))).project) {

            let toDoMatch = JSON.parse(localStorage.getItem(localStorage.key(i)))
            matchingTodos.push(toDoMatch)

            let toDoObject = localStorage.getItem(localStorage.key(i))
            
            const toDoContainer = document.createElement('div')
            toDoContainer.className = "todo-div"

            // **** ToDo object render, still needs formatting ****
            const toDoTitle = document.createElement('p')
            toDoTitle.innerHTML = `${toDoMatch.title}`

            const toDoDescription = document.createElement('p')
            toDoDescription.innerHTML = `${toDoMatch.description}`
            
            const toDoProject = document.createElement('p')
            toDoProject.innerHTML = `${toDoMatch.project}`

            const toDoNotes = document.createElement('p')
            toDoNotes.innerHTML = `${toDoMatch.notes}`

            const todoDueDate = document.createElement('date')
            todoDueDate.innerHTML = `${(toDoMatch.dueDate).toString()}`

            const todoNotes = document.createElement('p')
            todoNotes.innerHTML = `${toDoMatch.notes}`

            // Priority range dropdown menu
            const priorityRange = document.createElement('p')
            priorityRange.innerHTML = `${'Priority: ' + toDoMatch.priority}`

            // Checkbox to toggle completion of task
            const checkBox = document.createElement('INPUT')
            checkBox.setAttribute("type", "checkbox")

            if ((toDoMatch.checkList).toString() == "true") {
                console.log("facts")
                checkBox.checked = true
            }
            else if ((toDoMatch.checkList).toString() == "false") {
                checkBox.checked = false
            }

            // On click of checkbox,
            checkBox.addEventListener('click', () => {
                //
                if (JSON.parse(localStorage.getItem(localStorage.key(i))).checkList == 'true') {
                    console.log('make me false! ')
                    toDoMatch.checkList = 'false'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(toDoMatch))
                }
                    else if ((JSON.parse(localStorage.getItem(localStorage.key(i))).checkList) == 'false') {
                    console.log('make me true!')
                    toDoMatch.checkList = 'true'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(toDoMatch))
                }
            })

            const editButton = document.createElement('button')
            editButton.innerHTML = "Edit"

            editButton.addEventListener('click', () => {

                // Test that we have the right to-do object key from localstorage.
                console.log(toDoObject)

                // Get the edit todo form from index.html file
                const editTodoForm = document.getElementById('edit-todo-form')

                // Show the modal on click of the edit button
                editTodoForm.showModal()

                // Pre-populate form values using localstorage todo object data
                document.getElementById('new-title').value = toDoMatch.title
                document.getElementById('new-project').value = toDoMatch.project
                document.getElementById('new-description').value = toDoMatch.description
                document.getElementById('new-notes').value = toDoMatch.notes
                document.getElementById('new-date').value = toDoMatch.dueDate
                toDoMatch.checkList = toDoMatch.checkList.toString()







                // Adds click event listener to the submission button on the modal form.
                document.getElementById('edit-todo').addEventListener('click', (e) => {
                    e.preventDefault()

                    let newTitleValue = document.getElementById('new-title').value
                    let newDescriptionValue = document.getElementById('new-description').value
                    let newProjectValue = document.getElementById('new-project').value



                    console.log(`${newTitleValue}`)
                    // TODO - Add the edit todo object module function here, passing in new values.
                    
                    


                    // 
                    editTodoForm.close()
                })


            })

            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = "X"
            deleteButton.addEventListener('click', () => {                

                // Removes todo object from localstorage using the key
                // localStorage.removeItem(localStorage.key(i))
                console.log(localStorage.key(i))

                // Removes the todo Div container from page
                // contentBox.removeChild(toDoContainer)

            })

            toDoContainer.appendChild(checkBox)
            toDoContainer.appendChild(toDoTitle)
            toDoContainer.appendChild(toDoProject)
            toDoContainer.appendChild(toDoDescription)
            toDoContainer.appendChild(todoDueDate)
            toDoContainer.appendChild(todoNotes)
            toDoContainer.appendChild(priorityRange)
            toDoContainer.appendChild(editButton)
            toDoContainer.appendChild(deleteButton)
            contentBox.appendChild(toDoContainer)

        }
    }
    
}

