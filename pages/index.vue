<script lang="ts" setup>
import Button from "../components/Button.vue";

const { data, isFetching, isError, error } = useHotPosts();

definePageMeta({
    pageTransition: { name: "slidein", type: "transition" },
});

useHead({
    title: "Homepage - Hoyo Scraper",
});
</script>

<template>
    <div>
        <section class="flex flex-col-reverse md:flex-row">
            <div class="w-full md:w-1/2 flex justify-center flex-col">
                <a
                    href="https://www.youtube.com/watch?v=TmaAOV4SJNQ"
                    target="_blank"
                    class="yt-link anyimg"
                >
                    <div
                        class="w-full h-full text-8xl opacity-40 bg-black flex justify-center items-center"
                    >
                        <i class="bi bi-play-circle"></i>
                    </div>
                </a>
            </div>
            <div class="w-full md:w-1/2 flex justify-center flex-col p-10">
                <div>
                    <h1 class="text-4xl">
                        Minimalistic Hoyolab client made with Nuxt 3 + Tailwind
                        CSS
                    </h1>
                    <p class="mt-5 text-lg">
                        Browse trending topics, user profiles and recent events
                        from Genshin Impact!
                    </p>
                    <NuxtLink to="/trending" custom v-slot="{ navigate }">
                        <Button primary class="mt-5" @click="navigate">
                            Explore!
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="flex flex-col items-center mt-5">
            <h1 class="text-6xl mb-7">Hot posts</h1>
            <AlertBlock v-if="isFetching" info>Loading new posts...</AlertBlock>
            <AlertBlock v-if="isError" danger
                >There was an error while loading posts: {{ error }}</AlertBlock
            >
            <div
                class="bg-slate-800 rounded-md lg:w-2/3 xl:w-1/3 border border-sky-300"
            >
                <PostRecord v-for="post in data" :key="post.id" :post="post" />
            </div>
        </section>
    </div>
</template>

<style scoped>
.yt-link {
    background-image: url("/img/Colombina.png");

    @apply block aspect-video border-2 border-rose-600;
}
</style>
