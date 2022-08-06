<script setup lang="ts">
import { Post } from "@/types/post";

interface PostProps {
    post: Post;
}
// TODO: Add ability to save posts locally.
const props = defineProps<PostProps>();
</script>

<template>
    <div class="p-3 hover:bg-slate-700 transition-colors">
        <!-- Top post bar -->
        <div class="flex items-center mb-1">
            <!-- Avatar -->
            <div
                :style="{ backgroundImage: `url('${post.user.avatar_url}')` }"
                class="w-10 h-10 rounded-full anyimg"
            ></div>
            <!-- Name and game -->
            <div class="ml-3 text-sm text-gray-400">
                <div>
                    {{ post.user.nickname }}
                    <span>
                        <!-- Is official? -->
                        <div
                            class="justify-self-end p-2 bg-sky-400"
                            v-if="post.is_official"
                        >
                            Official
                        </div>
                    </span>
                </div>
                <div class="text-indigo-300 font-bold">
                    {{ post.game }}
                </div>
            </div>
        </div>
        <!-- Title and link to hoyolab TODO: Link to the full post viewer -->
        <h3 class="text-xl font-bold">
            <NuxtLink :to="`/post/${post.id}`" class="hover:text-sky-400">{{
                post.subject
            }}</NuxtLink>
        </h3>
        <!-- Post description -->
        <p>{{ post.content }}</p>
        <!-- Pack of images -->
        <div
            v-if="post.images && post.images.length > 1"
            class="flex flex-wrap py-5 mt-2"
        >
            <ZoomImg
                v-for="img in post.images"
                :key="img"
                :img="img"
                classes="w-1/2 aspect-video anyimg"
            />
        </div>
        <!-- A single Image -->
        <ZoomImg
            v-else-if="post.images && post.images.length > 0"
            :img="post.images[0]"
            classes="anyimg h-96 my-5"
        />
        <!-- Statistics -->
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
        <!-- Bottom border -->
        <div class="border-b border-gray-600 mt-5"></div>
    </div>
</template>
