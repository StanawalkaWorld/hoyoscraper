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
    <div class="p-10">
        <AlertBlock v-if="isFetching">Fetching topics...</AlertBlock>
        <AlertBlock danger v-if="isError"
            >An error has occured while fetching trending topics:
            {{ error }}</AlertBlock
        >

        <h1 class="text-6xl font-bold text-center">Trending topics</h1>

        <Transition name="opacity">
            <div class="flex justify-center mt-7" v-if="isFetched">
                <div class="bg-slate-800 rounded-md w-full xl:w-1/2">
                    <TopicRecord
                        v-for="topic in data"
                        :key="topic.id"
                        :topic="topic"
                        class="border-b border-b-slate-500 p-5 flex items-center last:border-0 hover:bg-slate-700"
                    >
                    </TopicRecord>
                </div>
            </div>
        </Transition>
    </div>
</template>
