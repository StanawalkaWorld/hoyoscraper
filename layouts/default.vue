<script setup lang="ts">
const imgState = useState("modal_img", () => "");
</script>

<template>
    <div class="antialiased">
        <nav class="bg-slate-800 p-5 flex items-center">
            <h1 class="text-2xl font-bold">Hoyo Scraper</h1>
            <nav-link to="/" class="ml-8">Home</nav-link>
            <nav-link to="/trending" class="ml-5">Trending</nav-link>
            <!-- TODO: Add favourites page. -->
        </nav>
        <main>
            <NuxtPage />
        </main>
    </div>
    <div
        v-if="imgState"
        class="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex justify-center items-center"
        @click.self="imgState = ''"
    >
        <div
            :style="{ backgroundImage: `url('${imgState}')` }"
            class="w-full md:w-1/2 aspect-video anyimg"
        ></div>
    </div>
</template>

<style>
@import "@/assets/styles/transitions.css";

body {
    @apply bg-slate-900 text-gray-200 box-border overflow-x-hidden;
}

.anyimg {
    @apply bg-no-repeat bg-contain bg-center;
}
</style>
