<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
    title: z.string().nonempty('Title is required'),
    description: z.string().nonempty('Description is required')
})

type Schema = z.output<typeof schema>

const state = reactive({
    title: undefined,
    description: undefined
})

async function onSubmit(event: FormSubmitEvent<any>) {
    const response = await $fetch('/api/tasks/add', {
        method: 'POST',
        body: {
            title: state.title,
            description: state.description
        }
    })
    console.log(response)
}
</script>

<template>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
        <UInput v-model="state.title" label="Title" />
        <Delimeter />
        <UInput v-model="state.description" label="Description" />
        <Delimeter />
        <UButton type="submit">Submit</UButton>
    </UForm>
</template>