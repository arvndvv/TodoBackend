const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const todoSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true,

    },

    completed: {
        type: Boolean,

        required: true,

    }
})
module.exports = mongoose.model('Todo', todoSchema)