<script setup lang="ts">
const route = useRoute()
interface Task {
    id: string
    title: string
    description: string
}
const { data: task } = await useFetch<Task>(`/api/tasks/${route.params.id}`);
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1 class="text-2xl font-semibold" v-if="task">{{ task.title }}</h1>
        <h1 class="text-2xl font-semibold" v-else>Loading...</h1>
      </template>
      <p v-if="task">{{ task.description }}</p>
      <p v-else>Loading...</p>
    </UCard>
  </UContainer>
</template>