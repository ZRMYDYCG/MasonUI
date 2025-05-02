<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from './type'
import { throttle } from 'lodash-es'
import { computed, inject, ref, watch } from 'vue'
import MIcon from '../../icon/src/icon.vue'
import { BUTTON_GROUP_CTX_KEY } from './context.ts'

defineOptions({
  name: 'MButton',
})

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  type: 'default',
  size: 'default',
  throttleDuration: 1000,
})

const emit = defineEmits<ButtonEmits>()

const groupContext = inject(BUTTON_GROUP_CTX_KEY, null)

// 计算属性优先使用group context的值
const size = computed(() => (props.size !== 'default' ? props.size : groupContext?.size))
const type = computed(() => (props.type !== 'default' ? props.type : groupContext?.type))
const disabled = computed(() => props.disabled || groupContext?.disabled || false)

const buttonRef = ref<HTMLButtonElement>()

// 节流处理
const throttledEmit = ref(
  throttle(
    (e: MouseEvent) => emit('throttleClick', e),
    props.throttleDuration,
    { leading: true, trailing: false },
  ),
)

watch(
  () => props.throttleDuration,
  (newDuration) => {
    throttledEmit.value = throttle(
      (e: MouseEvent) => emit('throttleClick', e),
      newDuration,
      { leading: true, trailing: false },
    )
  },
)

function handleClick(e: MouseEvent) {
  if (disabled.value || props.loading)
    return

  if (props.useThrottle) {
    throttledEmit.value(e)
  }
  else {
    emit('throttleClick', e)
  }
}

defineExpose({
  buttonRef,
  disabled,
  size,
  type,
})
</script>

<template>
  <component
    :is="tag"
    ref="buttonRef"
    class="m-button"
    :class="[
      type ? `m-button--${type}` : '',
      size ? `m-button--${size}` : '',
      {
        'is-disabled': disabled || loading,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="disabled || loading"
    :autofocus="autoFocus"
    @click="handleClick"
  >
    <div
      class="m-button__icon"
      :style="{
        marginRight: $slots.default && $slots.icon ? '8px' : '0',
      }"
    >
      <template v-if="loading">
        <MIcon :name="loadingIcon ? loadingIcon : 'LoadingArc'" spin />
      </template>
      <MIcon v-if="icon && !loading" :name="icon" />
      <template v-if="!icon && $slots.icon">
        <slot name="icon" />
      </template>
    </div>
    <span class="m-button__content">
      <slot />
    </span>
  </component>
</template>

<style lang="scss">

</style>
