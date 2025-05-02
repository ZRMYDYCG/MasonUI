<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <m-input v-model="value" type="text" clearable />
</template>

<style scoped>

</style>
