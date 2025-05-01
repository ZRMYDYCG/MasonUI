<script setup lang="ts">
import type { MessageType } from './type'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  type: MessageType
  content: string
  duration?: number
  onClose?: () => void
}>()

const visible = ref(true)
const timer = ref<number>()
const startTime = ref<number>(0)
const remaining = ref<number>(props.duration || 3000)

const iconComponent = computed(() => {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
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
    <span class="message__icon">{{ iconComponent }}</span>
    <span class="message__content">{{ content }}</span>
    <button class="message__close" @click="handleClose">
      ×
    </button>
  </div>
</template>

<style lang="scss">
.message {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &--success {
    color: #52c41a;
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
  }

  &--error {
    color: #ff4d4f;
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
  }

  &--warning {
    color: #faad14;
    background-color: #fffbe6;
    border: 1px solid #ffe58f;
  }

  &--info {
    color: #1890ff;
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }

  &__icon {
    margin-right: 8px;
  }

  &__close {
    margin-left: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 0;
    font-size: 16px;
  }
}
</style>
