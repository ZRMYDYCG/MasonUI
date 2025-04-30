<script setup>

</script>

<template>
  <div class="icon-demo">
    <div class="icon-item">
      <MIcon name="CheckCircle" color="#52c41a" size="24" />
      <span>Success</span>
    </div>
    <div class="icon-item">
      <MIcon name="CloseCircle" color="#f5222d" size="24" />
      <span>Error</span>
    </div>
    <div class="icon-item">
      <MIcon name="InfoCircle" color="#1890ff" size="24" />
      <span>Info</span>
    </div>
    <div class="icon-item">
      <MIcon name="WarningCircle" color="#faad14" size="24" />
      <span>Warning</span>
    </div>
  </div>
</template>

<style scoped>
.icon-demo {
  display: flex;
  gap: 30px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>

<style scoped>

</style>
