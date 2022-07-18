<script lang="ts" setup>
import { Topic } from "~~/types/topic";

interface TopicProps {
    topic: Topic;
}

const props = defineProps<TopicProps>();
</script>

<template>
    <div>
        <i class="bi bi-hash text-5xl"></i>
        <div class="ml-5">
            <h1
                class="text-3xl font-bold hover:text-sky-400 hover:cursor-pointer"
            >
                {{ topic.name }}
            </h1>
            <p class="text-lg mt-2">{{ topic.desc }}</p>
            <div class="flex items-center text-sm mt-2">
                <div>
                    <i class="bi bi-eye"></i>
                    {{ topic.stats.views.toLocaleString() }}
                </div>
                <div class="ml-5">
                    <i class="bi bi-chat-dots-fill"></i>
                    {{ topic.stats.replies.toLocaleString() }}
                </div>
            </div>
        </div>
    </div>
</template>
