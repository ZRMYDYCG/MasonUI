<script setup>
import { ref } from 'vue'

const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
</script>

<template>
  <div class="demo-size-group">
    <MInput
      v-model="input3"
      size="small"
      placeholder="小尺寸"
    />
    <MInput
      v-model="input4"
      placeholder="默认尺寸"
    />
    <MInput
      v-model="input5"
      size="large"
      placeholder="大尺寸"
    />
  </div>
</template>

<style>
.demo-size-group {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
