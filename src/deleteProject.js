export default function deleteProject(project) {

    // Ask if the user REALLY wants to delete project + associated tasks.
    if (confirm("Are you sure? Deleting project will remove all associated tasks.")) {
        console.log(project)

        // Get old array and assign it to oldProjectArray variable.
        let oldProjectArray = JSON.parse(localStorage.getItem("projectArray"))
        console.log(oldProjectArray)

        // Create an empty array to hold the matching keys
        let keysToRemove = []

        // Find matching toDo objects
        for (let i = 0; i < localStorage.length; i++) {

            // If the localstorage object is the projectArray, pass it.
            if (localStorage.key(i) == "projectArray") {
                continue
            }
            
            // Else, if it's not..
            else {
                // Assign the matching object to a variable
                let matchingTodoObject = JSON.parse(localStorage.getItem(localStorage.key(i)))
                
                // Assign the matching key to a variable
                let matchingKey = ((localStorage.key(i)))
                
                // If the project title matches the iterated todo's project,
                if (project == matchingTodoObject.project) {

                    // Add the key to the keystoRemove array.
                    keysToRemove.push(matchingKey)
                }
            }
        }

        // Iterate through keys-to-remove array and remove that item from local storage.
        keysToRemove.forEach(key => localStorage.removeItem(key))

        // Filter out the project name from old array and assign new filtered array.
        const updatedProjectArray = oldProjectArray.filter((projectName) => !(projectName == project))

        // Set the filtered array as the new projectArray in localstorage.
        localStorage.setItem("projectArray", JSON.stringify(updatedProjectArray))

        // Reload the page to reset/re-render projects and todos.
        location.reload()
    }

    // If the user changes their mind on deleting the projects and associated todo's, nothing will happen.
    else {
        // Nothing will happen.
        return
    }

}