<script setup lang="ts">
import type { ButtonGroupProps } from './type'
import { computed, provide } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './context.ts'

defineOptions({
  name: 'MButtonGroup',
})

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  size: 'default',
  type: 'default',
  disabled: false,
})

const context = computed(() => ({
  size: props.size,
  type: props.type,
  disabled: props.disabled,
}))

provide(BUTTON_GROUP_CTX_KEY, context.value)
</script>

<template>
  <div class="m-button-group">
    <slot />
  </div>
</template>

<style lang="scss">
</style>
