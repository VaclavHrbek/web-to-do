<script setup lang="ts">

import type { FormSubmitEvent } from '#ui/types'
const state = reactive({
    title: undefined,
    description: undefined
})

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with event.data
  console.log(event.data)
}

const title = ref('')
const description = ref('')
</script>

<template>
    <UForm :state="state" @submit="onSubmit">
        <UInput v-model="title" label="Title" />
        <UInput v-model="description" label="Description" />
        <UButton type="submit">Submit</UButton>
    </UForm>
</template>