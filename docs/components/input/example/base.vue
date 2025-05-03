<script setup>
import { ref } from 'vue'

const input1 = ref('')
</script>

<template>
  <MInput v-model="input1" placeholder="请输入内容" />
</template>
