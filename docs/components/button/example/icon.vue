<script setup>
</script>

<template>
  <div style="display: flex;gap: 8px;">
    <!-- 使用 icon prop -->
    <MButton icon="Plus">
      搜索
    </MButton>

    <!-- 使用 icon slot -->
    <MButton>
      <template #icon>
        <MIcon name="Minus" />
      </template>
      下载
    </MButton>
  </div>
</template>
