<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance()?.appContext.config.globalProperties

function showShort() {
  $message.success('这条消息将在3秒后关闭', 3000)
}

function showLong() {
  $message.info('这条消息会停留10秒', 10000)
}
</script>

<template>
  <m-button @click="showShort">
    3秒后关闭
  </m-button>
  <m-button @click="showLong">
    10秒后关闭
  </m-button>
</template>

<style scoped>

</style>
