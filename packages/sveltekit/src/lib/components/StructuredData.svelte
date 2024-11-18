<script lang="ts">
  import type { StructuredDataWebSite } from '@epoxide/web-types'

  export let schema: StructuredDataWebSite

  $: modifiedSchema = JSON.stringify({
    ...schema,
    '@context': 'https://schema.org',
  })
</script>

{@html "<script type=\"application/ld+json\">" + modifiedSchema + "</script>"}
