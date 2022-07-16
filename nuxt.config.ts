import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            meta: [
                { name: "author", content: "StanawalkaWorld" },
                { name: "description", content: "Minimalistic Hoyolab explorer made in Nuxt 3 and Tailwind CSS." },
                { name: "keywords", content: "hoyolab, nuxt, nuxt3, nuxtjs, tailwind, tailwindcss, genshin, impact, hoyoverse, mihoyo" }
            ]
        }
    },
    dev: true
})
