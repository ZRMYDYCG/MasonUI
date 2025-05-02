<script setup>
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance().appContext.config.globalProperties
function showMessageWithCallback() {
  $message.success({
    content: '关闭时会触发回调',
    duration: 2000,
    onClose: () => {
      $message.info('回调函数已执行')
    },
  })
}
</script>

<template>
  <m-button @click="showMessageWithCallback">
    带回调的消息
  </m-button>
</template>
