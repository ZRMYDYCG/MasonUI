<script setup lang="ts">
import { ref } from 'vue'

const input7 = ref('')
</script>

<template>
  <MInput
    v-model="input7"
    clearable
    placeholder="输入内容后显示清除按钮"
  />
</template>

<style scoped>

</style>
