const repo = require('./repository');

exports.addTodo = async(req, res) => {
    try {
        let payload = {
            title: req.body.title,
            completed: req.body.completed
        }
        let todo = await repo.addTodo({...payload });
        res.status(200).json(todo)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, status: false })
    }
}

exports.getTodos = async(req, res) => {
    try {
        let todos = await repo.getTodos();
        // console.log(todos)
        res.status(200).json(todos)

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err, status: false })
    }
}

exports.removeTodo = async(req, res) => {
    try {
        let id = req.params.id;
        let removed = await repo.removeTodo(id);
        res.status(200).json({
            status: true,
            removed: true,
            data: removed,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}
exports.toggleCompleted = async(req, res) => {
    try {
        let id = req.params.id;
        let toggled = await repo.toggle(id);
        res.status(200).json(toggled);
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}