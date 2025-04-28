<script setup lang="ts">
import { useNamespace } from '@mason-ui/hooks/index'

defineOptions({
  name: 'MButton',
})

const n = useNamespace('button')
</script>

<template>
  <button :class="[n.b()]">
    <slot />
  </button>
</template>

<style scoped>

</style>
