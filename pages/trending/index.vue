<script setup lang="ts">
import { useTrendingTopics } from "~~/composables/trending";

// SSR stuff
definePageMeta({
    pageTransition: { name: "opacity", type: "transition" },
});
useHead({
    title: "Trending - Hoyo Scraper",
});

const { data, isError, isLoading, error, isFetched } = useTrendingTopics();
</script>

<template>
    <section class="flex flex-col items-center">
        <h1 class="text-6xl font-bold text-center my-5">Trending topics</h1>

        <AlertBlock class="w-1/2 my-5" :active="isLoading"
            >Fetching topics...</AlertBlock
        >
        <AlertBlock class="w-1/2 my-5" danger :active="isError"
            >An error has occured while fetching trending topics:
            {{ error }}</AlertBlock
        >

        <Transition name="fade-in">
            <div
                class="bg-slate-800 rounded-md w-full xl:w-1/2 mt-5"
                v-if="isFetched"
            >
                <TopicRecord
                    v-for="topic in data"
                    :key="topic.id"
                    :topic="topic"
                    class="border-b border-b-slate-500 p-5 flex items-center last:border-0 hover:bg-slate-700"
                />
            </div>
        </Transition>
    </section>
</template>
