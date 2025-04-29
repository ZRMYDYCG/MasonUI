<script setup>
import { onMounted, ref } from 'vue'

const baseColorVars = [
  '--m-color-white',
  '--m-color-black',
  '--m-color-transparent',
]

const themeColorGroups = [
  'primary',
  'success',
  'warning',
  'danger',
  'error',
  'info',
]

const baseColors = ref([])
const themeColors = ref({})

// 获取颜色值并处理格式
function getColorValue(varName) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
    .toLowerCase()

  // 处理包含小数的 RGB 值
  if (value.startsWith('rgb')) {
    return value.replace(/\d*\.\d+/g, m => Math.round(Number.parseFloat(m)))
  }
  return value
}

// 计算文本对比色
function textColor(bgColor) {
  if (bgColor === 'transparent')
    return 'var(--m-font-color)'

  let r, g, b

  if (bgColor.startsWith('rgb')) {
    const match = bgColor.match(/\d+/g)
    ;[r, g, b] = match.map(Number)
  }
  else if (bgColor.startsWith('#')) {
    const hex = bgColor.slice(1)
    const bigint = Number.parseInt(hex, 16)
    r = (bigint >> 16) & 255
    g = (bigint >> 8) & 255
    b = bigint & 255
  }
  else {
    return 'var(--m-font-color)'
  }

  // 计算亮度值
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 150 ? 'var(--m-font-color-black)' : 'var(--m-font-color-white)'
}

// 初始化颜色数据
onMounted(() => {
  // 处理基础颜色
  baseColors.value = baseColorVars.map(varName => ({
    varName,
    value: getColorValue(varName),
  }))

  // 处理主题颜色
  const themeData = {}
  themeColorGroups.forEach((group) => {
    const colors = []

    // 添加基础色
    const baseVar = `--m-color-${group}`
    colors.push({
      varName: baseVar,
      value: getColorValue(baseVar),
    })

    // 添加 light 色阶
    for (let i = 1; i <= 9; i++) {
      const lightVar = `--m-color-${group}-light-${i}`
      colors.push({
        varName: lightVar,
        value: getColorValue(lightVar),
      })
    }

    themeData[group] = colors
  })

  themeColors.value = themeData
})
</script>

<template>
  <div class="color-system">
    <!-- 基础颜色 S -->
    <div class="color-group">
      <h3>基础颜色</h3>
      <div class="color-grid">
        <div
          v-for="color in baseColors"
          :key="color.varName"
          class="color-item"
          :style="{
            backgroundColor: color.value,
            color: textColor(color.value),
            border: color.varName.includes('transparent') ? '1px dashed var(--m-border-color)' : 'none',
          }"
        >
          <div class="color-name">
            {{ color.varName }}
          </div>
          <div class="color-value">
            {{ color.value }}
          </div>
        </div>
      </div>
    </div>
    <!-- 基础颜色 E -->

    <!-- 主题颜色 S -->
    <div
      v-for="(group, groupName) in themeColors"
      :key="groupName"
      class="color-group"
    >
      <h3>{{ groupName }}</h3>
      <div class="color-grid">
        <div
          v-for="color in group"
          :key="color.varName"
          class="color-item"
          :style="{
            backgroundColor: color.value,
            color: textColor(color.value),
          }"
        >
          <div class="color-name">
            {{ color.varName }}
          </div>
          <div class="color-value">
            {{ color.value }}
          </div>
        </div>
      </div>
    </div>
    <!-- 主题颜色 E -->
  </div>
</template>

<style scoped>
.color-system {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.color-group h3 {
  font-size: var(--m-font-size-large);
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--m-font-color);
  text-transform: capitalize;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
}

.color-item {
  padding: 1rem;
  cursor: pointer;
  border-radius: var(--m-border-radius-large);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-item:hover {
  transform: translateY(-4px);
}

.color-name {
  font-size: var(--m-font-size-small);
  font-family: var(--vp-font-family-mono), serif;
  word-break: break-word;
}

.color-value {
  font-size: var(--m-font-size-smaller);
  opacity: 0.9;
  font-family: var(--vp-font-family-mono), serif;
}
</style>
