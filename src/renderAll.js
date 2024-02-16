import renderTodos from "./renderTodos"
import { format } from "date-fns";

export default function renderAll() { 

    let currentKey = ""
    let key, object

    // First clear contents of whatever is in the main content area (avoids repetition of object listing)
    const projectHeader = document.getElementById('project-header')
    const contentBox = document.querySelector('.content')
    contentBox.replaceChildren()
    projectHeader.replaceChildren()

    const projectTitle = document.createElement('h1')
    projectTitle.innerHTML = "All Tasks"
    projectHeader.appendChild(projectTitle)
    


    // contentBox.appendChild(projectTitle)

    let editTodoForm = document.getElementById('edit-todo-form')

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "projectArray") {
            continue
        }
        else {

            let key = localStorage.key(i)
            let object = JSON.parse(localStorage.getItem(key))

            const toDoContainer = document.createElement('div')
            toDoContainer.className = "todo-div"

            const toDoButtonDivs = document.createElement('div')
            toDoButtonDivs.className = "todo-div-buttons"

            // Create checkbox container to facilitate custom styling
            const checkContainer = document.createElement('div')
            checkContainer.className = "checkbox-container"
            checkContainer.style.justifyContent = 'center'

            const checkBox = document.createElement('INPUT')
            checkBox.setAttribute("type", "checkbox")

            checkContainer.appendChild(checkBox)

            if ((object.checkList).toString() == "true") {
                checkBox.checked = true
            }
            else if ((object.checkList).toString() == "false") {
                checkBox.checked = false
            }

            // On click of checkbox,
            checkBox.addEventListener('click', () => {

                // If it's true, make it false. 
                if (object.checkList == 'true') {
                    // console.log('make me false! ')
                    object.checkList = 'false'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(object))
                }
                    // And vice versa.
                    else if (object.checkList == 'false') {
                    // console.log('make me true!')
                    object.checkList = 'true'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(object))
                }
            })

            // **** ToDo object render, still needs formatting ****
            const toDoTitle = document.createElement('p')
            toDoTitle.style.fontSize = "xx-large"
            toDoTitle.style.textAlign = "center"
            toDoTitle.innerHTML = `${object.title}`
            
            const toDoProject = document.createElement('p')
            // toDoProject.style.fontSize = "small"
            toDoProject.innerHTML = `${object.project}`

            const toDoDescription = document.createElement('p')
            toDoDescription.innerHTML = `${object.description}`


            const date1 = format(
                `${((object.dueDate).toString()).replaceAll("-", '/')}`,
                'MMMM d yyyy',
                new Date()
            )

            const todoDueDate = document.createElement('date')
            todoDueDate.innerHTML = `${date1}`

            const toDoNotes = document.createElement('p')
            toDoNotes.innerHTML = `${object.notes}`

            const priorityRange = document.createElement('p')
            priorityRange.innerHTML = `${'Priority: ' + object.priority.charAt(0).toUpperCase() + object.priority.slice(1).toLowerCase()}`

            const editButton = document.createElement('button')

            editButton.innerHTML = "Edit"
            editButton.setAttribute("data-id", localStorage.key(i))
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = "X"

            editButton.addEventListener('click', function(e) {
                e.stopImmediatePropagation()

                document.getElementById('edit-todo').setAttribute("data-id", localStorage.key(i))

                console.log(object) 
                console.log(this.dataset.id)

                // Get the edit todo form from index.html file
                
                editTodoForm.showModal()

                // Pre-populate form values using localstorage todo object data
                document.getElementById('new-title').value = object.title
                document.getElementById('new-project').value = object.project
                document.getElementById('new-description').value = object.description
                document.getElementById('new-date').value = object.dueDate
                document.getElementById('new-priority').value = object.priority
                document.getElementById('new-notes').value = object.notes

                 
 
            })

            // Adds click event listener to the submission button on the modal form.
            document.getElementById('edit-todo').addEventListener('click', function(e) {
                e.stopImmediatePropagation()

                currentKey = e.target.dataset.id

                // Pre-populate form with existing LS values
                let newTitleValue = document.getElementById('new-title').value
                let newProjectValue = document.getElementById('new-project').value
                let newDescriptionValue = document.getElementById('new-description').value
                let newDateValue = document.getElementById('new-date').value
                let newPriorityValue = document.getElementById('new-priority').value
                let newNotesValue = document.getElementById('new-notes').value

                // Create new object using new inputs
                let editedObject = {
                    title: newTitleValue,
                    project: newProjectValue,
                    description: newDescriptionValue,
                    dueDate: newDateValue,
                    priority: newPriorityValue,
                    notes: newNotesValue,
                    checkList: JSON.parse(localStorage.getItem(currentKey)).checkList
                }
           
                // console.log(editedObject)
                // console.log(currentKey)

                // Assign stringified object to same key in localstorage.
                localStorage.setItem(currentKey, JSON.stringify(editedObject))
                // Close modal
                editTodoForm.close()
                contentBox.replaceChildren()
                // renderTodos(newProjectValue)
                renderAll()
                // location.reload()
            })

            deleteButton.addEventListener('click', () => {                

                // Removes object from localstorage and removes node from DOM
                localStorage.removeItem(key)
                contentBox.removeChild(toDoContainer)

            })

            
            toDoContainer.appendChild(toDoTitle)
            toDoContainer.appendChild(checkContainer)
            toDoContainer.appendChild(toDoProject)
            toDoContainer.appendChild(toDoDescription)
            toDoContainer.appendChild(todoDueDate)
            toDoContainer.appendChild(toDoNotes)
            toDoContainer.appendChild(priorityRange)
            toDoButtonDivs.appendChild(editButton)
            toDoButtonDivs.appendChild(deleteButton)
            toDoContainer.appendChild(toDoButtonDivs)
            contentBox.appendChild(toDoContainer)

        }        
    }
    currentKey = ""
}