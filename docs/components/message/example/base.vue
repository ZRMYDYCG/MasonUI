<script setup>
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance().appContext.config.globalProperties

function showSuccess() {
  $message.success('这是一条成功消息')
}
function showError() {
  $message.error('这是一条错误消息')
}
function showWarning() {
  $message.warning('这是一条警告消息')
}
function showInfo() {
  $message.info('这是一条普通信息')
}
</script>

<template>
  <m-button @click="showSuccess">
    成功消息
  </m-button>
  <m-button @click="showError">
    错误消息
  </m-button>
  <m-button @click="showWarning">
    警告消息
  </m-button>
  <m-button @click="showInfo">
    普通消息
  </m-button>
</template>
