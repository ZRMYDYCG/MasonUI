<script setup>
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance().appContext.config.globalProperties

function showMessage() {
  $message.success('成功！')
}
</script>

<template>
  <button @click="showMessage">
    显示消息
  </button>
</template>
