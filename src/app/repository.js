const todoModel = require("./model");
const addTodo = async(payload) => {
    const newTodo = await todoModel.create(payload);
    return newTodo;
}
const getTodos = async() => {
    const todos = await todoModel.find();
    return todos;
}
const removeTodo = async id => {
    const todo = await todoModel.findByIdAndRemove(id);
    return todo;
}
const toggle = async id => {
    const task = await todoModel.findById(id);
    task.completed = !task.completed;
    task.save((err, updated) => { return updated; })
        // const updated = await todoModel.findByIdAndUpdate(id, { completed: !this.completed })
        // return true
}

module.exports = {
    getTodos,
    addTodo,
    removeTodo,
    toggle
}