export default function someFunction() {
    console.log('todo test!')


class ToDo {
    constructor(project, title, description, dueDate, priority, notes, checkList) {
        this.project = project
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        this.checkList = checkList   
    }

}

const test = new ToDo('today', 'bake cake', 'chocolate', 'tomorrow', 'high', 'n/a', 'unchecked')

// example console.log test to do
for (const [key, value] of Object.entries(test)) {
    console.log(`${value}`);
}
}