<script lang="ts" setup>
import { Post } from "~~/types/post";

interface PostListProps {
    posts: Post[];
}

const props = defineProps<PostListProps>();
</script>

<template>
    <Transition name="opacity" mode="in-out">
        <div
            class="bg-slate-800 rounded-md lg:w-2/3 xl:w-1/3 border border-sky-900"
        >
            <PostRecord v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </Transition>
</template>
