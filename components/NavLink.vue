<script lang="ts" setup>
const props = defineProps<{
    to: string;
}>();
</script>

<template>
    <NuxtLink
        :to="props.to"
        class="hover:cursor-pointer hover:text-gray-200 text-gray-300"
    >
        <slot></slot>
    </NuxtLink>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-rose-600 font-semibold;
}
</style>
