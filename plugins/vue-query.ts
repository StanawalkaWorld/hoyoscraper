import {
    VueQueryPlugin,
    VueQueryPluginOptions,
    QueryClient,
    hydrate,
    dehydrate,
  } from "vue-query";
  
  export default (nuxt) => {
    // Modify your Vue Query global settings here
    const queryClient = new QueryClient({
      defaultOptions: { queries: { staleTime: 1000, cacheTime: 5 * 60000 } },
    });
    const options: VueQueryPluginOptions = { queryClient };
  
    nuxt.vueApp.use(VueQueryPlugin, options);
  
    if (process.server) {
      nuxt.hooks.hook("app:rendered", () => {
        nuxt.nuxtState["vue-query"] = dehydrate(queryClient);
      });
    }
  
    if (process.client) {
      nuxt.hooks.hook("app:created", () => {
        hydrate(queryClient, nuxt.nuxtState["vue-query"]);
      });
    }
  };