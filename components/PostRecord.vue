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
                <div class="text-indigo-300 font-bold">
                    {{ post.game }}
                </div>
            </div>
        </div>
        <h3 class="text-xl font-bold">
            <a
                :href="`https://www.hoyolab.com/article/${post.id}`"
                target="_blank"
                >{{ post.subject }}</a
            >
        </h3>
        <p>{{ post.content }}</p>
        <div
            v-if="post.images.length > 1"
            class="flex flex-wrap bg-slate-800 py-1 mt-2"
        >
            <ZoomImg
                v-for="img in post.images"
                :key="img"
                :img="img"
                classes="w-1/2 aspect-video anyimg"
            />
        </div>
        <ZoomImg
            v-else-if="post.images && post.images.length > 0"
            :img="post.images[0]"
            classes="anyimg h-96"
        />
        <div class="flex items-center text-sm mt-5">
            <div>
                <i class="bi bi-eye"></i>
                {{ post.stats.views.toLocaleString() }}
            </div>
            <div class="ml-5">
                <i class="bi bi-chat-dots-fill"></i>
                {{ post.stats.replies.toLocaleString() }}
            </div>
        </div>
        <div class="border-b border-gray-600 mt-5"></div>
    </div>
</template>

<style scoped></style>
