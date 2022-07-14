<script setup lang="ts">
const { data, pending, error } = useFetch("/api/v1/trending");

definePageMeta({
    pageTransition: { name: "slidein", type: "transition" },
});

useHead({
    title: "Trending - Hoyo Scraper",
});
</script>

<template>
    <div class="p-10">
        <AlertBlock v-if="pending">Fetching topics...</AlertBlock>
        <AlertBlock danger v-if="error"
            >An error has occured while fetching trending topics</AlertBlock
        >

        <h1 class="text-5xl font-bold text-center">Trending topics</h1>

        <div class="flex justify-center mt-7">
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
    </div>
</template>
