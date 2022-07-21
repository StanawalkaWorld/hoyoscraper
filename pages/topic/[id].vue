<script lang="ts" setup>
useHead({
    title: "Browsing topic - Hoyo Scraper",
});
definePageMeta({
    pageTransition: { name: "opacity", type: "transition" },
});

const route = useRoute();
const { data, isError, isFetching, error, isFetched } = useTopicPosts(
    parseInt(route.params.id as string)
);
</script>

<template>
    <section class="flex flex-col items-center">
        <h1 class="text-6xl text-center my-5">Posts for a topic</h1>

        <PostList class="mt-5" v-if="isFetched" :posts="data" />

        <AlertBlock :active="isFetching">Loading posts...</AlertBlock>
        <AlertBlock danger :active="isError">
            An error has occured while loading posts: {{ error }}
        </AlertBlock>
    </section>
</template>
