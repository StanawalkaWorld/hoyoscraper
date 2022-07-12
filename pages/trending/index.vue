<script setup lang="ts">
import ButtonVue from "~~/components/Button.vue";
import { Topic } from "~~/types/topic";

const { data, pending, error, refresh } = useFetch("/api/v1/trending");
</script>

<template>
    <div class="p-10">
        <AlertBlock v-if="pending">Fetching topics...</AlertBlock>
        <AlertBlock danger v-if="error"
            >An error has occured while fetching trending topics</AlertBlock
        >
        <ul class="list-disc">
            <li v-for="topic in data" :key="topic.id">
                <NuxtLink :to="`/topic/${topic.id}`" class="hover:text-sky-500"
                    >{{ topic.name }} ({{ topic.desc }})</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>
