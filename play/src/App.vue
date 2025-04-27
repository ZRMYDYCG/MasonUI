<script setup lang="ts">
import { useNamespace } from '@mason-ui/hooks/index.ts'

const n = useNamespace('button')
</script>

<template>
  <button :class="[n.b()]" />
</template>

<style scoped>

</style>
