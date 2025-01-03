
<script setup lang="ts">
const links = [{
  label: 'Add task',
    icon: 'material-symbols:add-2-rounded',
    to: '/tasks/add'
}, {
  label: 'Installation',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
}, {
  label: 'Vertical Navigation',
  icon: 'i-heroicons-chart-bar',
  to: '/components/vertical-navigation'
}, {
  label: 'Command Palette',
  icon: 'i-heroicons-command-line',
  to: '/components/command-palette'
}]
</script>

<template>
    <div class="flex flex-col lg:grid lg:grid-cols-10 max-w-6xl mx-auto mt-4">
        <div class="max-w-xl col-span-2">
            <UVerticalNavigation :links="links" />
        </div>
        <div class="col-span-8">
            <UContainer class="max-w-5xl">
                <slot />
            </UContainer>
        </div>
    </div>
</template>