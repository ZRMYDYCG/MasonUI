<script setup>
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance().appContext.config.globalProperties

function showHoverPause() {
  $message.info('鼠标悬停在此消息上会暂停自动关闭', 3000)
}
</script>

<template>
  <m-button @click="showHoverPause">
    悬停暂停示例
  </m-button>
</template>
