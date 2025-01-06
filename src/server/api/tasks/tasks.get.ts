import Task from "~/server/models/Task.js";

export default defineEventHandler((event) => {
    const tasks = Task.find();
    return tasks;
})
