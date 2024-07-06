<script setup lang="ts">
import { FOOTER } from '@epoxide/web-constants'

defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <footer class="footer">
    <div class="title-logo">
      <img :src="src" :alt="FOOTER.LOGO.ALT" />
      <span>{{ FOOTER.TITLE }}</span>
    </div>
    <section class="social-media-links">
      <IconButton
        v-for="link in FOOTER.SOCIAL_MEDIA_LINKS"
        :key="link.ICON"
        :href="link.URL"
        target="_blank"
        :icon="link.ICON"
        icon-library="brands"
        size="xl"
        :aria-label="link.ARIA_LABEL"
      />
    </section>
  </footer>
</template>

<style scoped lang="scss">
@use '@epoxide/web-assets/css/breakpoints';

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  --horizontal-padding: 2rem;
  --vertical-padding: 0.5rem;
  width: calc(100% - var(--horizontal-padding) * 2);
  height: calc(var(--footer-height) - var(--vertical-padding) * 2);
  padding: var(--vertical-padding) var(--horizontal-padding);
  background-color: rgb(var(--surface-color));
  color: rgb(var(--on-surface-color));

  @media screen and (max-width: breakpoints.$breakpoint-sm) {
    justify-content: center;
  }

  .title-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5em;
    font-weight: 100;

    img {
      filter: grayscale(100%);
    }

    @media screen and (max-width: breakpoints.$breakpoint-sm) {
      display: none;
    }
  }

  .social-media-links {
    display: flex;
    align-items: center;
    gap: 1em;
  }
}
</style>
