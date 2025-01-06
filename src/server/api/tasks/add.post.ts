import Task from "~/server/model/Task.js";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const task = Task.create(body);
})