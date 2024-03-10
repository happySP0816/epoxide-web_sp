<script setup lang="ts">
import '~/assets/css/app.css'
import { META } from '@epoxide/web-constants'
</script>

<template>
  <Head>
    <Title>{{ META.TITLE }}</Title>
    <Meta name="description" :content="META.DESCRIPTION" />
    <Meta property="og:title" :content="META.TITLE" />
    <Meta property="og:description" :content="META.DESCRIPTION" />
    <Meta property="og:site_name" :content="META.SITE_NAME" />
    <Meta property="og:url" :content="META.URL" />
    <Meta property="og:locale" :content="META.LOCALE" />
    <Meta property="og:type" :content="META.TYPE" />
    <Meta property="og:image" :content="`${META.URL}${META.OG_IMAGE}`" />
    <Meta name="twitter:card" :content="META.TWITTER_CARD" />
    <Meta name="twitter:title" :content="META.TITLE" />
    <Meta name="twitter:description" :content="META.DESCRIPTION" />
    <Meta name="twitter:image" :content="`${META.URL}${META.TWITTER_IMAGE}`" />
    <Meta name="twitter:creator" :content="META.TWITTER_CREATOR" />
    <Meta name="twitter:creator:id" :content="META.TWITTER_CREATOR_ID" />
    <Meta name="robots" content="index, follow, nocache" />
    <Meta name="googlebot" content="index, follow, nocache" />
    <Meta name="color-scheme" :content="META.COLOR_SCHEME" />
    <Meta name="theme-color" :content="META.THEME_COLOR" />
    <Link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="100x100" />
  </Head>
  <main>
    <slot />
  </main>
  <Footer src="/images/epoxide-logo-circle.svg" />
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--footer-height));
}
</style>
