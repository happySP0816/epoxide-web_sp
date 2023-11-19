<script lang="ts">
  export let icon: string
  export let iconLibrary: 'brands' | 'solid'
  export let size: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | undefined =
    undefined
</script>

<i class={`fa-${iconLibrary} fa-${icon}${size ? ` fa-${size}` : ''}`} />
