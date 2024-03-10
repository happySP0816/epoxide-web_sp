<script setup lang="ts">
import { NOT_FOUND } from '@epoxide/web-constants'
import type { NuxtError } from '#app'

export interface Props {
  error: NuxtError
}

defineProps<Props>()
</script>

<template v-if="error.statusCode === 404">
  <NuxtLayout>
    <h1 class="title">{{ NOT_FOUND.TITLE }}</h1>
    <section class="links">
      <a href="/">{{ NOT_FOUND.GO_BACK }}</a>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@use '@epoxide/web-assets/css/breakpoints';

.links {
  display: flex;
  gap: 3em;

  @media screen and (max-width: breakpoints.$breakpoint-lg) {
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }

  a {
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: rgb(var(--on-background-color));
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;

    &:hover {
      color: rgb(var(--primary-color));
    }
  }
}
</style>
