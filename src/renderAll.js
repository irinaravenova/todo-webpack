export default function renderAll() { 

    // First clear contents of whatever is in the main content area (avoids repetition of object listing)
    const contentBox = document.querySelector('.content')
    contentBox.replaceChildren()

    const projectTitle = document.createElement('h1')
    projectTitle.innerHTML = "All Tasks"
    contentBox.appendChild(projectTitle)


    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == "projectArray") {
            continue
        }
        else {
            let key = localStorage.key(i)
            let object = JSON.parse(localStorage.getItem(key))
           
            console.log(key)
            console.log(object)

            const checkBox = document.createElement('INPUT')
            checkBox.setAttribute("type", "checkbox")

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
                    console.log('make me false! ')
                    object.checkList = 'false'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(object))
                }
                    // And vice versa.
                    else if (object.checkList == 'false') {
                    console.log('make me true!')
                    object.checkList = 'true'
                    localStorage.setItem(localStorage.key(i), JSON.stringify(object))
                }
            })

            const toDoContainer = document.createElement('div')
            toDoContainer.className = "todo-div"

            // **** ToDo object render, still needs formatting ****
            const toDoTitle = document.createElement('p')
            toDoTitle.innerHTML = `${object.title}`
            
            const toDoProject = document.createElement('p')
            toDoProject.innerHTML = `${object.project}`

            const toDoDescription = document.createElement('p')
            toDoDescription.innerHTML = `${object.description}`

            const todoDueDate = document.createElement('date')
            todoDueDate.innerHTML = `${(object.dueDate).toString()}`

            const toDoNotes = document.createElement('p')
            toDoNotes.innerHTML = `${object.notes}`

            // Priority range dropdown menu
            const priorityRange = document.createElement('p')
            priorityRange.innerHTML = `${'Priority: ' + object.priority}`


            const editButton = document.createElement('button')
            editButton.innerHTML = "Edit"

            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = "X"

            deleteButton.addEventListener('click', () => {                

                console.log(key)
                console.log(object)

                localStorage.removeItem(key)
                contentBox.removeChild(toDoContainer)

            })

            toDoContainer.appendChild(checkBox)
            toDoContainer.appendChild(toDoTitle)
            toDoContainer.appendChild(toDoProject)
            toDoContainer.appendChild(toDoDescription)
            toDoContainer.appendChild(todoDueDate)
            toDoContainer.appendChild(priorityRange)
            toDoContainer.appendChild(editButton)
            toDoContainer.appendChild(deleteButton)
            contentBox.appendChild(toDoContainer)
        }        
    }
}