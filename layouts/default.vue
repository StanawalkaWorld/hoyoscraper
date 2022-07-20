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
@import "@/assets/styles/transitions.css";

body {
    @apply bg-slate-900 text-gray-200 box-border overflow-x-hidden;
}

.anyimg {
    @apply bg-no-repeat bg-contain bg-center;
}
</style>
