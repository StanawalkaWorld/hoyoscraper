<script setup lang="ts">
import { useTrendingTopics } from "~~/composables/trending";

// SSR stuff
definePageMeta({
    pageTransition: { name: "opacity", type: "transition" },
});
useHead({
    title: "Trending - Hoyo Scraper",
});

const { data, isError, isFetching, error, isFetched } = useTrendingTopics();
</script>

<template>
    <section class="flex flex-col items-center">
        <h1 class="text-6xl font-bold text-center my-5">Trending topics</h1>

        <div
            class="bg-slate-800 lg:rounded-md w-full lg:w-1/2 mt-5"
            v-if="isFetched"
        >
            <TopicRecord v-for="topic in data" :key="topic.id" :topic="topic" />
        </div>

        <AlertBlock :active="isFetching">Fetching topics...</AlertBlock>
        <AlertBlock danger :active="isError"
            >An error has occured while fetching trending topics:
            {{ error }}</AlertBlock
        >
    </section>
</template>
