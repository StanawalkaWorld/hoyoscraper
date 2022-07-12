<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <section class="landing-block flex">
        <div class="halfblock">
            <a
                href="https://www.youtube.com/watch?v=TmaAOV4SJNQ"
                target="_blank"
            >
                <img
                    src="/img/Colombina.png"
                    class="w-full"
                    alt="Colombina from Teyvat chapter interlude teaser"
                />
                <div class="overlay"></div>
            </a>
        </div>
        <div class="halfblock p-10">
            <h1 class="text-4xl">
                Minimalistic Hoyolab client made with Nuxt 3 + Tailwind CSS
            </h1>
            <p class="mt-5">
                Browse trending topics, user profiles and recent events from
                Genshin Impact!
            </p>
        </div>
    </section>
</template>

<style scoped>
.halfblock {
    @apply w-1/2 flex justify-center flex-col;
}
.overlay {
    @apply absolute left-0 right-0 top-0 bottom-0 opacity-20 bg-black;
}
</style>
