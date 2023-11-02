class ToDo {
    constructor(project, title, description, dueDate, priority, notes, checkList) {
        this.project = project
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checkList = Boolean(checkList)   
    }
}

// Function that takes in data and creates a Todo object
export default function createTodo(project, title, description, dueDate, priority, notes, checkList) {
    const newTodo = new ToDo(project, title, description, dueDate, priority, notes, checkList)
    return newTodo
}


// example console.log test todo object
// for (const [key, value] of Object.entries(newTodo)) {
//     console.log(`${value}`);
// }

