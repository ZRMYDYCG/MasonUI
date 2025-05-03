<script setup lang="ts">
import { ref } from 'vue'

const input6 = ref('')
</script>

<template>
  <MInput v-model="input6">
    <template #prepend>
      Http://
    </template>
    <template #append>
      .com
    </template>
  </MInput>
</template>

<style scoped>

</style>
