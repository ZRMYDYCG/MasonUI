<script setup>
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance().appContext.config.globalProperties
function showMultiple() {
  $message.success('第一条成功消息')
  $message.error('第二条错误消息')
  $message.warning('第三条警告消息')
  $message.info('第四条普通消息')
}
</script>

<template>
  <m-button @click="showMultiple">
    连续显示多条消息
  </m-button>
</template>
