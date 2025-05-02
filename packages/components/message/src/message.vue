<script setup lang="ts">
import type { MessageType } from './type'
import MIcon from '@mason-ui/components/icon'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  type: MessageType
  content: string
  duration?: number
  onClose?: () => void
  showClose?: boolean
}>()

const visible = ref(true)
const timer = ref<number>()
const startTime = ref<number>(0)
const remaining = ref<number>(props.duration || 3000)

const iconComponent = computed(() => {
  const icons = {
    success: 'CheckCircle',
    error: 'CloseCircle',
    warning: 'WarningCircleFill',
    info: 'InfoCircleFill',
  }
  return icons[props.type]
})

function startTimer() {
  startTime.value = Date.now()
  timer.value = window.setTimeout(() => {
    visible.value = false
    props.onClose?.()
  }, remaining.value)
}

function pauseTimer() {
  const elapsed = Date.now() - startTime.value
  remaining.value -= elapsed
  window.clearTimeout(timer.value)
}

function resumeTimer() {
  startTime.value = Date.now()
  timer.value = window.setTimeout(() => {
    visible.value = false
    props.onClose?.()
  }, remaining.value)
}

function handleClose() {
  visible.value = false
  props.onClose?.()
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  window.clearTimeout(timer.value)
})
</script>

<template>
  <div
    class="message"
    :class="`message--${type}`"
    @mouseenter="pauseTimer"
    @mouseleave="resumeTimer"
  >
    <span class="message__icon"><MIcon :name="iconComponent" size="12" /></span>
    <span class="message__content">{{ content }}</span>
    <button v-if="showClose" class="message__close" @click="handleClose">
      <MIcon name="Close" size="12" />
    </button>
  </div>
</template>

<style lang="scss"  scoped>

</style>
