const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    },
    day:{
        type:String,
        require:true
    },
    reminder:{
        type:Boolean,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Task = mongoose.model('task',TaskSchema);
module.exports = Task;