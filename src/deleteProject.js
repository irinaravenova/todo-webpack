export default function deleteProject(project) {

    // Ask if the user REALLY wants to delete project + associated tasks.
    if (confirm("Are you sure? Deleting project will remove all associated tasks.")) {
        console.log(project)

        // Get old array and assign it to oldProjectArray variable.
        let oldProjectArray = JSON.parse(localStorage.getItem("projectArray"))
        console.log(oldProjectArray)

        let keysToRemove = []

        // Find matching toDo objects
        for (let i = 0; i < localStorage.length; i++) {

            if (localStorage.key(i) == "projectArray") {
                continue
            }
            
            else {
                let matchingTodoObject = JSON.parse(localStorage.getItem(localStorage.key(i)))
                let matchingKey = ((localStorage.key(i)))
                
                if (project == matchingTodoObject.project) {
                    console.log(matchingKey)
                    keysToRemove.push(matchingKey)
                }

            }
        }

        console.log(keysToRemove)

        keysToRemove.forEach(key => localStorage.removeItem(key))

        const updatedProjectArray = oldProjectArray.filter((projectName) => !(projectName == project))
        console.log(updatedProjectArray)

        localStorage.setItem("projectArray", JSON.stringify(updatedProjectArray))

        location.reload()
    }

    // If not,
    else {

        // Nothing will happen.
        return
    }

}