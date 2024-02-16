import renderAll from "./renderAll"
import { format } from "date-fns";


// Get project name passed in from renderProjects module function.
export default function renderTodos(project) {

    const contentBox = document.querySelector('.content')
    // contentBox.replaceChildren()


    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == "projectArray") {
            continue
        }
        else if (project == JSON.parse(localStorage.getItem(localStorage.key(i))).project) {

            // Assign matching todo object to variable, and key to variable
            let toDoMatch = JSON.parse(localStorage.getItem(localStorage.key(i)))            
            let key = localStorage.key(i)
            
            // **** ToDo object render, still needs formatting ****
            const toDoContainer = document.createElement('div')
            toDoContainer.className = "todo-div"

            const toDoButtonDivs = document.createElement('div')
            toDoButtonDivs.className = "todo-div-buttons"
            
            const toDoTitle = document.createElement('p')
            toDoTitle.style.fontSize = "xx-large"
            toDoTitle.innerHTML = `${toDoMatch.title}`

            const toDoDescription = document.createElement('p')
            toDoDescription.innerHTML = `${toDoMatch.description}`
            
            const toDoProject = document.createElement('p')
            toDoProject.innerHTML = `${toDoMatch.project}`

            const toDoNotes = document.createElement('p')
            toDoNotes.innerHTML = `${toDoMatch.notes}`

            const date1 = format(
                `${((toDoMatch.dueDate).toString()).replaceAll("-", '/')}`,
                'MMMM d yyyy',
                new Date()
            )

            const todoDueDate = document.createElement('date')
            todoDueDate.innerHTML = `${date1}`

            const todoNotes = document.createElement('p')
            todoNotes.innerHTML = `${toDoMatch.notes}`

            // Priority range dropdown menu
            const priorityRange = document.createElement('p')
            priorityRange.innerHTML = `${'Priority: ' + toDoMatch.priority}`



            // Checkbox to toggle completion of task
            const checkBox = document.createElement('INPUT')
            checkBox.setAttribute("type", "checkbox")

            // Show checked or not based on localstorage data
            if ((toDoMatch.checkList).toString() == "true") {
                checkBox.checked = true
            }
            else if ((toDoMatch.checkList).toString() == "false") {
                checkBox.checked = false
            }


            // On click of checkbox,
            checkBox.addEventListener('click', () => {
                //
                if (JSON.parse(localStorage.getItem(localStorage.key(i))).checkList == 'true') {
                    // console.log('makes me false')
                    toDoMatch.checkList = 'false'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(toDoMatch))
                }
                    else if ((JSON.parse(localStorage.getItem(localStorage.key(i))).checkList) == 'false') {
                    // console.log('makes me true')
                    toDoMatch.checkList = 'true'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(toDoMatch))
                }
            })


            const editButton = document.createElement('button')
            editButton.innerHTML = "Edit"

            // On click of edit button,
            editButton.addEventListener('click', () => {

                

                console.log(key)
                console.log(toDoMatch) 

                // Get the edit todo form from index.html file
                const editTodoForm = document.getElementById('edit-todo-form')

                document.getElementById('edit-todo').setAttribute("data-id", localStorage.key(i))


                // Show the modal on click of the button
                editTodoForm.showModal()

                // Pre-populate form values using localstorage todo object data
                document.getElementById('new-title').value = toDoMatch.title
                document.getElementById('new-project').value = toDoMatch.project
                document.getElementById('new-description').value = toDoMatch.description
                document.getElementById('new-date').value = toDoMatch.dueDate
                document.getElementById('new-priority').value = toDoMatch.priority
                document.getElementById('new-notes').value = toDoMatch.notes

                

                
            })    

            // Add click event listener to the submission button on the modal form.
            document.getElementById('edit-todo').addEventListener('click', function(e) {
                e.preventDefault()

                // Pre-populate form with existing LS values,
                let newTitleValue = document.getElementById('new-title').value
                let newProjectValue = document.getElementById('new-project').value
                let newDescriptionValue = document.getElementById('new-description').value
                let newDateValue = document.getElementById('new-date').value
                let newPriorityValue = document.getElementById('new-priority').value
                let newNotesValue = document.getElementById('new-notes').value

                // Create an object using new inputs,
                let editedObject = {
                    title: newTitleValue,
                    project: newProjectValue,
                    description: newDescriptionValue,
                    dueDate: newDateValue,
                    priority: newPriorityValue,
                    notes: newNotesValue,
                    checkList: toDoMatch.checkList
                }

                console.log(editedObject)
                console.log(key)

                // Replace original keyed object with stringified object in localstorage.
                // localStorage.setItem(key, JSON.stringify(editedObject))

                contentBox.replaceChildren()

                // Close modal,
                editTodoForm.close()


                // Re-render project page.
                // renderProjects()
                // renderTodos(project)

                renderAll()

                
                // renderTodos(newProjectValue)

                location.reload()
            })
    
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = "X"
            deleteButton.addEventListener('click', () => {                

                console.log(key)
                console.log(toDoMatch)

                // Remove object from LS using key variable
                // localStorage.removeItem(key)

                // Remove the node from content box area
                // contentBox.removeChild(toDoContainer)

            })

            // Append items to div and div to content box
            toDoContainer.appendChild(checkBox)
            toDoContainer.appendChild(toDoTitle)
            toDoContainer.appendChild(toDoProject)
            toDoContainer.appendChild(toDoDescription)
            toDoContainer.appendChild(todoDueDate)
            toDoContainer.appendChild(todoNotes)
            toDoContainer.appendChild(priorityRange)
            toDoButtonDivs.appendChild(editButton)
            toDoButtonDivs.appendChild(deleteButton)
            toDoContainer.appendChild(toDoButtonDivs)
            contentBox.appendChild(toDoContainer)

        }
    }
    
}

