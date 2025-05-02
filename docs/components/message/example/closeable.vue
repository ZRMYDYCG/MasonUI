<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const { $message } = getCurrentInstance()?.appContext.config.globalProperties

function showClosable() {
  $message?.success({
    content: '这是一条可关闭的消息',
    duration: 0,
    showClose: true,
  })
}
</script>

<template>
  <m-button @click="showClosable">
    显示可关闭消息
  </m-button>
</template>

<style scoped>

</style>
