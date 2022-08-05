<script setup lang="ts">
interface ImageProps {
    img: string;
    classes: string;
}

const props = defineProps<ImageProps>();

const modal = useState("modal_img", () => "");
</script>
<template>
    <div
        :style="{ backgroundImage: `url('${img}')`, display: 'block' }"
        :class="classes"
        @click="modal = img"
    ></div>
</template>
