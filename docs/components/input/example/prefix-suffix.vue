<script setup lang="ts">
import { ref } from 'vue'

const input8 = ref('')
</script>

<template>
  <MInput v-model="input8" placeholder="请输入用户名">
    <template #prefix>
      <MIcon name="InfoCircle" />
    </template>
    <template #suffix>
      <MIcon name="WarningCircle" />
    </template>
  </MInput>
</template>

<style scoped>

</style>
