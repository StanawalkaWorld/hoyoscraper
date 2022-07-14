<script setup lang="ts">
import axios from "axios";
import { useQuery } from "vue-query";
import { TrendResponse } from "~~/types/Hoyoverse/trending-response";
import { Topic } from "~~/types/topic";

// SSR stuff
definePageMeta({
    pageTransition: { name: "slidein", type: "transition" },
});
useHead({
    title: "Trending - Hoyo Scraper",
});

// Fetching function for trending topics query
const trendingFetcher = async () => {
    const resp = await axios.get<Topic[]>(
        `http://${process.env.HOSTNAME}:${process.env.PORT}/api/v1/trending`
    );

    if (resp.status != 200) throw new Error(resp.statusText);

    return resp.data;
};

// Trending topics query
const { data, error, isFetching, isError } = useQuery(
    "trending",
    trendingFetcher
);

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
