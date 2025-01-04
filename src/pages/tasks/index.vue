<!-- <template>
    <div>
        <h1>Task List</h1>
    </div>
</template> -->
<script setup lang="ts">
interface Task {
    id: string;
    title: string;
    description: string;
}
const { data: tasks, error } = await useFetch<Task[]>('/api/tasks/tasks')
</script>

<template>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="!tasks">Loading...</div>
    <div v-else>
        <div v-for="task in tasks">
            <div class="flex flex-row">
                <div class="m-2 p-2">
                    <h1>{{ task.id }}</h1>
                </div>
                <div class="m-2 p-2">
                    <div class="hover:underline">
                    <NuxtLink :to="`/tasks/${task.id}`">{{ task.title }}</NuxtLink>
                </div>
                </div>
            </div>
            <div class="w-full h-1 bg-gray-600"></div>
        </div>
    </div>
</template>
