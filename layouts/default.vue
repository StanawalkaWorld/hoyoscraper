<script setup lang="ts"></script>

<template>
    <div class="antialiased">
        <nav class="bg-slate-800 p-5 flex items-center">
            <h1 class="text-2xl font-bold">Hoyo Scraper</h1>
            <nav-link to="/" class="ml-8">Home</nav-link>
            <nav-link to="/trending" class="ml-5">Trending</nav-link>
        </nav>
        <main>
            <NuxtPage />
        </main>
    </div>
</template>

<style>
body {
    @apply bg-slate-900 text-gray-200 box-border;
}

.slidein-enter-active,
.slidein-leave-active {
    transition: 0.5s ease;
    position: absolute;
    width: 100%;
}

.slidein-enter-from,
.slidein-leave-to {
    opacity: 0;
}

.anyimg {
    @apply bg-no-repeat bg-contain bg-center;
}
</style>
