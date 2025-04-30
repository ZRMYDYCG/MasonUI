<script setup lang="ts">
import type { messageTypes } from './type'
import { useNamespace } from '@mason-ui/hooks'
import { computed, onMounted, ref } from 'vue'
import MIcon from '../../icon/src/icon.vue'
import { messageEmits, messageProps } from './type'

const props = defineProps(messageProps)

const emits = defineEmits(messageEmits)

const n = useNamespace('message')

const { message, type } = props

const iconTypes: Record<messageTypes, string> = {
  success: 'CheckCircle',
  info: 'InfoCircle',
  warning: 'WarningCircle',
  error: 'CloseCircle',
}

const visible = ref(false)
onMounted(() => {
  visible.value = true
})

const comIconType = computed(() => {
  return iconTypes[type] ?? 'InfoCircle'
})
const comIconColor = computed(() => {
  switch (type) {
    case 'success':
      return '#0f9d58'
    case 'warning':
      return '#f4b400'
    case 'error':
      return '#b00020'
    default:
      return '#616161'
  }
})
</script>

<template>
  <transition name="m-message-fade" @before-leave="emits('close')" @after-leave="emits('destroy')">
    <div v-show="visible" :class="n.b()">
      <MIcon v-if="props.type" :name="comIconType" :color="comIconColor" />
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.m-message-fade-enter-from,
.m-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
