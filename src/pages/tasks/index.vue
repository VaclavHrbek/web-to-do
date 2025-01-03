<!-- <template>
    <div>
        <h1>Task List</h1>
    </div>
</template> -->
<script setup lang="ts">
const { data } = await useFetch('/api/todos')
</script>

<template>
    Hello
  <pre>{{ data }}</pre>
</template>
