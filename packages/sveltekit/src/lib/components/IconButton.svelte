<script lang="ts">
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements'
  import Icon from './Icon.svelte'

  export let href: HTMLAnchorAttributes['href'] | undefined = undefined
  export let target: HTMLAnchorAttributes['target'] | undefined = undefined
  export let type: HTMLButtonAttributes['type'] | undefined = undefined
  export let icon: string
  export let iconLibrary: 'brands' | 'solid'
  export let size: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | undefined =
    undefined
</script>

{#if href}
  <a {href} target={target ?? undefined} class="button">
    <Icon {icon} {iconLibrary} {size} />
  </a>
{:else}
  <button type={type ?? undefined} class="button">
    <Icon {icon} {iconLibrary} {size} />
  </button>
{/if}

<style lang="scss">
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
