<script setup lang="ts">
export interface Props {
  icon: string
  iconLibrary: 'brands' | 'solid'
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

withDefaults(defineProps<Props>(), {
  size: undefined,
})
</script>

<template>
  <i :class="`fa-${iconLibrary} fa-${icon}${size ? ` fa-${size}` : ''}`" />
</template>
