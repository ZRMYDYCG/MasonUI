<script setup lang="ts">
import { ref } from 'vue'

const textarea = ref('')
</script>

<template>
  <MInput
    v-model="textarea"
    type="textarea"
    :rows="3"
    placeholder="请输入多行文本"
  />
</template>

<style scoped>

</style>
