<template>
    <div class="">
        <nav class="topnav bg-slate-800 p-5 text-2xl">Hoyo Scraper</nav>
        <main>
            <slot />
        </main>
    </div>
</template>

<style>
body {
    @apply bg-slate-900 text-gray-200;
}

.card {
    @apply mt-4 bg-slate-700 mx-2 rounded-md;
}
</style>
