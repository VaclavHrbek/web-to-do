import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    },
    dueDate: {
        type: Date
    }
});

const Task = model('Task', TaskSchema);
export default Task;