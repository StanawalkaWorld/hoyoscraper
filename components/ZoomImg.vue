<script setup lang="ts">
interface ImageProps {
    img: string;
    classes: string;
}

const props = defineProps<ImageProps>();
</script>
<template>
    <a
        target="_blank"
        :style="{ backgroundImage: `url('${img}')`, display: 'block' }"
        :class="classes"
    ></a>
</template>
