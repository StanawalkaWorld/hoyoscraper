<script lang="ts" setup>
import Button from "../components/Button.vue";
</script>

<template>
    <section class="landing-block md:flex">
        <div class="halfblock">
            <a
                href="https://www.youtube.com/watch?v=TmaAOV4SJNQ"
                target="_blank"
                class="yt-link"
            >
                <div class="overlay">
                    <i class="bi bi-play-circle"></i>
                </div>
            </a>
        </div>
        <div class="halfblock p-10">
            <div>
                <h1 class="text-4xl">
                    Minimalistic Hoyolab client made with Nuxt 3 + Tailwind CSS
                </h1>
                <p class="mt-5 text-lg">
                    Browse trending topics, user profiles and recent events from
                    Genshin Impact!
                </p>
                <NuxtLink to="/trending" custom v-slot="{ navigate }">
                    <Button primary class="mt-5" @click="navigate">
                        Explore!
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.halfblock {
    @apply w-full md:w-1/2 flex justify-center flex-col;
}
.overlay {
    @apply w-full h-full text-8xl opacity-40 bg-black flex justify-center items-center;
}
.yt-link {
    background: url("/img/Colombina.png");

    @apply block aspect-video bg-no-repeat bg-contain bg-center border-2 border-rose-600;
}
</style>
