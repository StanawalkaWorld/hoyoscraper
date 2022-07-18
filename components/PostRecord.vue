<script setup lang="ts">
import { Post } from "@/types/post";

interface PostProps {
    post: Post;
}

const props = defineProps<PostProps>();
</script>

<template>
    <div class="p-3 hover:bg-slate-700">
        <div class="flex items-center mb-1">
            <div
                :style="{ backgroundImage: `url('${post.user.avatar_url}')` }"
                class="w-8 h-8 rounded-full anyimg"
            ></div>
            <div class="ml-3 text-sm text-gray-400">
                <div>
                    {{ post.user.nickname }}
                </div>
                <div class="text-gray-300">
                    {{ post.game }}
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold">{{ post.subject }}</h3>
        <p>{{ post.content }}</p>
        <div
            v-if="post.images.length > 1"
            class="flex flex-wrap bg-slate-800 py-1"
        >
            <div
                v-for="img in post.images"
                :key="img"
                :style="{ backgroundImage: `url('${img}')` }"
                class="w-1/2 h-96 anyimg"
            ></div>
        </div>
        <div
            v-else-if="post.images"
            :style="{ backgroundImage: `url('${post.images[0]}')` }"
            class="anyimg h-96"
        ></div>
    </div>
</template>

<style scoped></style>
