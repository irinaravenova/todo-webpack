export default function editProject(project, newProjectName) {

    // Test passing of variables to module.
    // console.log(project)
    // console.log(newProjectName)

    // Get existing project array from localStorage
    const workingArray = JSON.parse(localStorage.getItem("projectArray"))
    console.log(workingArray)

    
    // Iterate through projectArray from LS...
    for (let i = 0; i < workingArray.length; i++) {

        // And find project name match in the array.
        // If it is a match...
        if (workingArray[i] === project) {

            // Delete the old project name and replace it with the new one at the same index in the array.
            const updatedProjectArray = workingArray.toSpliced(i, 1, newProjectName)
            console.log(updatedProjectArray)

            // Set updated project array to local storage.
            localStorage.setItem("projectArray", JSON.stringify(updatedProjectArray))

            // Break out of the loop.
            break 
        }
    }


    // Iterate through localStorage to find todos with matching old project names.
    for (let j = 0; j < localStorage.length; j++) {

        let objectKey = localStorage.key(j)
        let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(j)))

        // Test for object and keys being assigned correctly.
        // console.log(toDoObject)     
        // console.log(objectKey)

        // If the localstorage object is the projectArray, pass it.
        if (localStorage.key(j) == "projectArray") {
            continue
        }

        // Else, if the project value of the todo object matches old one,
        else if (toDoObject.project === project) {
            toDoObject.project = `${newProjectName}`  
            
            // Change project names of todo objects and update them in localstorage.
            localStorage.setItem(objectKey, JSON.stringify(toDoObject))

        }

        // Reload window to display new project names.
        location.reload()
    }
}