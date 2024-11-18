<script setup lang="ts">
import type { StructuredDataWebSite } from '@epoxide/web-types'

export interface Props {
  schema: StructuredDataWebSite
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <component :is="'script'" type="application/ld+json">
    {{ JSON.stringify({ ...schema, '@context': 'https://schema.org' }) }}
  </component>
</template>
