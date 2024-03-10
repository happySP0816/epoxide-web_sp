<script setup lang="ts">
export interface Props {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  type?: 'button' | 'submit' | 'reset'
  icon: string
  iconLibrary: 'brands' | 'solid'
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
}

withDefaults(defineProps<Props>(), {
  href: undefined,
  target: undefined,
  type: undefined,
  size: undefined,
})
</script>

<template>
  <a v-if="href" :href="href" :target="target" class="button">
    <Icon :icon="icon" :icon-library="iconLibrary" :size="size" />
  </a>
  <button v-else :type="type" class="button">
    <Icon :icon="icon" :icon-library="iconLibrary" :size="size" />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--on-background-color));
  background-color: transparent;
  height: 2.5em;
  width: 2.5em;
  padding: 0.25em;
  border: none;
  border-radius: 50%;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background: rgba(var(--on-surface-color), 0.12);
  }
}
</style>
