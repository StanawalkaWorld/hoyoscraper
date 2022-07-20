<script lang="ts" setup>
const route = useRoute();
const { data, isError, isFetching, error } = useTopicPosts(
    parseInt(route.params.id as string)
);
</script>

<template>
    <section class="flex flex-col items-center">
        <h1 class="text-6xl">Posts for a topic</h1>
        <AlertBlock v-if="isFetching">Loading posts...</AlertBlock>
        <AlertBlock danger v-if="isError">
            An error has occured while loading posts: {{ error }}
        </AlertBlock>
        <PostList :posts="data" />
    </section>
</template>
