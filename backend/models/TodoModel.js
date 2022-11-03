const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name:String,
    description:String,
    status:{
        type:String,
        default:"To-do",
    },
});


module.exports = mongoose.model('Todo',TodoSchema);