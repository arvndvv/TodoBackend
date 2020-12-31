const todoController = require("./controller")
module.exports = app => {
    app.get('/', todoController.getTodos)
    app.post('/add', todoController.addTodo)
    app.delete('/remove/:id', todoController.removeTodo)
    app.put('/completed/:id', todoController.toggleCompleted)

}