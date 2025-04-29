<script setup lang="ts">
import { svgs } from '@mason-ui/svgs'

const colors = ['#1677ff', '#52c41a', '#f5222d', '#fa8c16']
const sizes = [24, 32, 40]
</script>

<template>
  <div class="icon-gallery">
    <h2>所有图标预览</h2>

    <!-- 默认展示 S -->
    <h3>默认样式</h3>
    <div class="icon-grid">
      <div v-for="name in svgs" :key="name" class="icon-item">
        <MIcon :name="name" />
        <div class="icon-name">
          {{ name }}
        </div>
      </div>
    </div>
    <!-- 默认展示 E -->

    <!-- 不同颜色 S -->
    <h3>不同颜色</h3>
    <div class="icon-grid">
      <div v-for="color in colors" :key="color" class="icon-item">
        <MIcon name="Check" :color="color" />
        <div class="icon-name">
          {{ color }}
        </div>
      </div>
    </div>
    <!-- 不同颜色 E -->

    <!-- 不同尺寸 S -->
    <h3>不同尺寸</h3>
    <div class="icon-grid">
      <div v-for="size in sizes" :key="size" class="icon-item">
        <MIcon name="Check" :size="size" />
        <div class="icon-name">
          {{ size }}px
        </div>
      </div>
    </div>
    <!-- 不同尺寸 E -->
  </div>
</template>

<style scoped>
.icon-gallery {
  padding: 20px;
}

.icon-gallery h3 {
  margin-bottom: 16px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
}

.icon-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  word-break: break-all;
  text-align: center;
}
</style>
