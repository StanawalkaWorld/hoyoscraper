<script setup lang="ts">
import { useTrendingTopics } from "~~/composables/trending";

const { data, isError, isFetching, suspense, error } = useTrendingTopics();

// SSR stuff
definePageMeta({
    pageTransition: { name: "slidein", type: "transition" },
});
useHead({
    title: "Trending - Hoyo Scraper",
});

onServerPrefetch(async () => {
    await suspense();
});

// This happens on the server
// onServerPrefetch(async () => {
//     await suspense();
// });

// const topics = computed<Topic[]>(() => {
//     let result: Topic[] = [];

//     data.value.data.list.forEach((post) => {
//         result.push({
//             id: parseInt(post.base.id),
//             name: post.base.name,
//             desc: post.base.desc,
//             stats: {
//                 views: parseInt(post.stat.view_num),
//                 replies: parseInt(post.stat.reply_num),
//             },
//         });
//     });

//     return result;
// });
</script>

<template>
    <div class="p-10">
        <AlertBlock v-if="isFetching">Fetching topics...</AlertBlock>
        <AlertBlock danger v-if="isError"
            >An error has occured while fetching trending topics:
            {{ error }}</AlertBlock
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
