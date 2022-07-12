<template>
    <section class="landing-block flex">
        <div class="halfblock border-2 border-rose-600">
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
            <h1 class="text-4xl">
                Minimalistic Hoyolab client made with Nuxt 3 + Tailwind CSS
            </h1>
            <p class="mt-5 text-lg">
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
    @apply w-full h-full text-8xl opacity-40 bg-black flex justify-center items-center;
}
.yt-link {
    background: url("/img/Colombina.png");

    @apply block aspect-video bg-no-repeat bg-contain bg-center;
}
</style>
