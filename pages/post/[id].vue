<script setup lang="ts">
import PostRecord from "@/components/PostRecord.vue";
import AlertBlock from "@/components/AlertBlock.vue";

const route = useRoute();
const { data, isError, error, isFetching } = usePost(
    parseInt(route.params.id as string)
);
</script>

<template>
    <section class="flex flex-col items-center">
        <PostRecord :post="data" class="container mx-auto mt-10" />

        <AlertBlock :active="isFetching">Loading posts...</AlertBlock>
        <AlertBlock danger :active="isError">
            An error has occured while loading posts: {{ error }}
        </AlertBlock>
    </section>
</template>
