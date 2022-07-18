<script setup lang="ts">
interface ImageProps {
    img: string;
    classes: string;
}

const props = defineProps<ImageProps>();
</script>
<template>
    <div :style="{ backgroundImage: `url('${img}')` }" :class="classes"></div>
</template>
