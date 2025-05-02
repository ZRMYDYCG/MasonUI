<script setup lang="ts">

</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
    <MButton size="small">
      small
    </MButton>
    <MButton>
      default
    </MButton>
    <MButton size="large">
      large
    </MButton>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
    <MButton>
      default
    </MButton>
    <MButton type="primary">
      primary
    </MButton>
    <MButton type="info">
      info
    </MButton>
    <MButton type="warning">
      warning
    </MButton>
    <MButton type="success">
      success
    </MButton>
    <MButton type="danger">
      danger
    </MButton>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
    <MButton>
      default
    </MButton>
    <MButton type="primary" plain>
      primary
    </MButton>
    <MButton type="info" plain>
      info
    </MButton>
    <MButton type="warning" plain>
      warning
    </MButton>
    <MButton type="success" plain>
      success
    </MButton>
    <MButton type="danger" plain>
      danger
    </MButton>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
    <MButton round>
      default
    </MButton>
    <MButton type="primary" plain round>
      primary
    </MButton>
    <MButton type="info" plain round>
      info
    </MButton>
    <MButton type="warning" plain round>
      warning
    </MButton>
    <MButton type="success" plain round>
      success
    </MButton>
    <MButton type="danger" plain round>
      danger
    </MButton>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 8px;">
    <MButton circle icon="CheckCircle" />
    <MButton type="primary" plain circle icon="CloseCircle" />
    <MButton type="info" plain circle icon="UpCircle" />
    <MButton type="warning" plain circle icon="RightCircle" />
    <MButton type="success" plain circle icon="InfoCircle" />
    <MButton type="danger" plain circle icon="Question" />
  </div>
</template>

<style scoped>

</style>
