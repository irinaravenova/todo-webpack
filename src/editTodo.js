export default function editTodo(key, project, title, description, dueDate, notes, priority, checkList) {

let updatedTodoObject = {
    project: project,
    title: title,
    description: description,
    dueDate: dueDate,
    notes: notes,
    priority: priority,
    checkList: checkList
}

localStorage.setItem(key, updatedTodoObject)


}