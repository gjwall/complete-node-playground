// Get the method to get incomplete tasks
// 1. Define getTasksToDo
// 2. use filter to return just the incomplete tasks (arrow function)
// 3. Test

const tasks = {
    tasks: [{
            text: 'Grocery shopping',
            completed: true 
    }, {
        text: 'Clean garden',
        completed: false 
    }, {
        text: 'Film course',
        completed: false 
    }],

    getTasksToDo() {
        // console.log('Getting tasks')

        // incompleteTasks = this.tasks.filter(function(task) {
        //     return task.completed === false
        // })

        // const incompleteTasks = this.tasks.filter((task) => {
        //     return task.completed === false
        // })

        // return incompleteTasks

        // or 
        // return incompleteTasks = this.tasks.filter((task) => {
        //     return task.completed === false
        // })

        // or 
        return this.tasks.filter((task) => task.completed === false)

    }

}

console.log(tasks.getTasksToDo())