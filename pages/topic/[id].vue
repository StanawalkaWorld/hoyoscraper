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
    <section>
        <h1 class="text-6xl text-center my-5">Posts for a topic</h1>
        <AlertBlock class="my-5" v-if="isFetching">Loading posts...</AlertBlock>
        <AlertBlock class="my-5" danger v-if="isError">
            An error has occured while loading posts: {{ error }}
        </AlertBlock>
        <div class="flex flex-col items-center" v-if="isFetched">
            <PostList :posts="data" />
        </div>
    </section>
</template>
