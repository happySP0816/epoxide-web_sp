// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
})
