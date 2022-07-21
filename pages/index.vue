<script lang="ts" setup>
import Button from "../components/Button.vue";
definePageMeta({
    pageTransition: { name: "opacity", type: "transition" },
});
useHead({
    title: "Homepage - Hoyo Scraper",
});

const { data, isFetching, isError, error, isFetched } = useHotPosts();
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
            <h1 class="text-6xl my-5">Hot posts</h1>

            <PostList v-if="isFetched" :posts="data" />

            <AlertBlock class="lg:w-1/4" :active="isFetching"
                >Loading new posts...</AlertBlock
            >
            <AlertBlock class="lg:w-1/4" :active="isError" danger
                >There was an error while loading posts: {{ error }}</AlertBlock
            >
        </section>
    </div>
</template>

<style scoped>
.yt-link {
    background-image: url("/img/Colombina.png");

    @apply block aspect-video border-2 border-rose-600;
}
</style>
