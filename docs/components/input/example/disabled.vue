<script setup lang="ts">
import { ref } from 'vue'

const input2 = ref('')
</script>

<template>
  <MInput
    v-model="input2"
    disabled
    placeholder="禁用状态"
  />
</template>

<style scoped>

</style>
