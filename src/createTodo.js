let allTodos = [];

// New toDo class constructor
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

export default function createTodo(project, title, description, dueDate, priority, notes, checkList) {
    const newTodo = new ToDo(project, title, description, dueDate, priority, notes, checkList)
    allTodos.push(newTodo)
    console.log(allTodos)
    return newTodo
}

export { allTodos }








// example console.log test todo object
// for (const [key, value] of Object.entries(newTodo)) {
//     console.log(`${value}`);
// }

