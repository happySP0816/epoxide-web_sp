// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  devtools: { enabled: true },
  routeRules: {
    '/R2AT': {
      redirect: { to: 'https://old.epoxide.se/R2AT', statusCode: 301 },
    },
    '/stats': {
      redirect: { to: 'https://old.epoxide.se/stats', statusCode: 301 },
    },
    '/replay': {
      redirect: { to: 'https://old.epoxide.se/replay', statusCode: 301 },
    },
  },
  compatibilityDate: '2024-11-04',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
})
