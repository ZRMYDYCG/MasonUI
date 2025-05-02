<script setup>
import { ref } from 'vue'

const count = ref(0)
function handleClick() {
  count.value++
}
</script>

<template>
  <div>
    {{ count }}
  </div>
  <MButton
    use-throttle
    :throttle-duration="2000"
    @throttle-click="handleClick"
  >
    节流按钮（2秒触发一次）
  </MButton>
</template>
