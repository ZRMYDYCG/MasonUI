<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { useNamespace } from '@mason-ui/hooks'
import * as Svgs from '@mason-ui/svgs'
import { addUnit, isUndefined } from '@mason-ui/utils'
import { computed } from 'vue'
import { iconProps } from './type'

defineOptions({
  name: 'MIcon',
})
const { name, color, size, spin } = defineProps(iconProps)
const n = useNamespace('icon')
const svg = computed(() => {
  return Svgs[name]
})

const style = computed<CSSProperties>(() => {
  if (!color && !size)
    return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    color,
  }
})
</script>

<template>
  <i
    :class="[n.b(), spin ? n.m('spin') : '']"
    :style="style"
  >
    <component :is="svg" />
  </i>
</template>
