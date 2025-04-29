<script setup lang="ts">
import { computed } from 'vue'

interface DesignToken {
  name: string
  value: string
  category: string
  subcategory?: string
}

const variables: DesignToken[] = [
  // 基础颜色
  { name: '--m-color-white', value: '#ffffff', category: 'color', subcategory: 'basic' },
  { name: '--m-color-black', value: '#000000', category: 'color', subcategory: 'basic' },
  { name: '--m-color-transparent', value: 'transparent', category: 'color', subcategory: 'basic' },

  // 品牌色
  { name: '--m-color-primary', value: '#4285f4', category: 'color', subcategory: 'brand' },
  { name: '--m-color-success', value: '#0f9d58', category: 'color', subcategory: 'brand' },
  { name: '--m-color-warning', value: '#f4b400', category: 'color', subcategory: 'brand' },
  { name: '--m-color-danger', value: '#db4437', category: 'color', subcategory: 'brand' },
  { name: '--m-color-error', value: '#b00020', category: 'color', subcategory: 'brand' },
  { name: '--m-color-info', value: '#616161', category: 'color', subcategory: 'brand' },

  // 主色扩展
  { name: '--m-color-primary-light-1', value: 'rgb(84.9, 145.2, 245.1)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-2', value: 'rgb(103.8, 157.4, 246.2)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-3', value: 'rgb(122.7, 169.6, 247.3)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-4', value: 'rgb(141.6, 181.8, 248.4)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-5', value: 'rgb(160.5, 194, 249.5)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-6', value: 'rgb(179.4, 206.2, 250.6)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-7', value: 'rgb(198.3, 218.4, 251.7)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-8', value: 'rgb(217.2, 230.6, 252.8)', category: 'color', subcategory: 'primary' },
  { name: '--m-color-primary-light-9', value: 'rgb(236.1, 242.8, 253.9)', category: 'color', subcategory: 'primary' },

  // 成功色扩展
  { name: '--m-color-success-light-1', value: 'rgb(39, 166.8, 104.7)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-2', value: 'rgb(63, 176.6, 121.4)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-3', value: 'rgb(87, 186.4, 138.1)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-4', value: 'rgb(111, 196.2, 154.8)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-5', value: 'rgb(135, 206, 171.5)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-6', value: 'rgb(159, 215.8, 188.2)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-7', value: 'rgb(183, 225.6, 204.9)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-8', value: 'rgb(207, 235.4, 221.6)', category: 'color', subcategory: 'success' },
  { name: '--m-color-success-light-9', value: 'rgb(231, 245.2, 238.3)', category: 'color', subcategory: 'success' },

  // 警告色扩展
  { name: '--m-color-warning-light-1', value: 'rgb(245.1, 187.5, 25.5)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-2', value: 'rgb(246.2, 195, 51)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-3', value: 'rgb(247.3, 202.5, 76.5)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-4', value: 'rgb(248.4, 210, 102)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-5', value: 'rgb(249.5, 217.5, 127.5)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-6', value: 'rgb(250.6, 225, 153)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-7', value: 'rgb(251.7, 232.5, 178.5)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-8', value: 'rgb(252.8, 240, 204)', category: 'color', subcategory: 'warning' },
  { name: '--m-color-warning-light-9', value: 'rgb(253.9, 247.5, 229.5)', category: 'color', subcategory: 'warning' },

  // 危险色扩展
  { name: '--m-color-danger-light-1', value: 'rgb(222.6, 86.7, 75)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-2', value: 'rgb(226.2, 105.4, 95)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-3', value: 'rgb(229.8, 124.1, 115)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-4', value: 'rgb(233.4, 142.8, 135)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-5', value: 'rgb(237, 161.5, 155)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-6', value: 'rgb(240.6, 180.2, 175)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-7', value: 'rgb(244.2, 198.9, 195)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-8', value: 'rgb(247.8, 217.6, 215)', category: 'color', subcategory: 'danger' },
  { name: '--m-color-danger-light-9', value: 'rgb(251.4, 236.3, 235)', category: 'color', subcategory: 'danger' },

  // 错误色扩展
  { name: '--m-color-error-light-1', value: 'rgb(183.9, 25.5, 54.3)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-2', value: 'rgb(191.8, 51, 76.6)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-3', value: 'rgb(199.7, 76.5, 98.9)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-4', value: 'rgb(207.6, 102, 121.2)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-5', value: 'rgb(215.5, 127.5, 143.5)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-6', value: 'rgb(223.4, 153, 165.8)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-7', value: 'rgb(231.3, 178.5, 188.1)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-8', value: 'rgb(239.2, 204, 210.4)', category: 'color', subcategory: 'error' },
  { name: '--m-color-error-light-9', value: 'rgb(247.1, 229.5, 232.7)', category: 'color', subcategory: 'error' },

  // 信息色扩展
  { name: '--m-color-info-light-1', value: 'rgb(112.8, 112.8, 112.8)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-2', value: 'rgb(128.6, 128.6, 128.6)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-3', value: 'rgb(144.4, 144.4, 144.4)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-4', value: 'rgb(160.2, 160.2, 160.2)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-5', value: '#b0b0b0', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-6', value: 'rgb(191.8, 191.8, 191.8)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-7', value: 'rgb(207.6, 207.6, 207.6)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-8', value: 'rgb(223.4, 223.4, 223.4)', category: 'color', subcategory: 'info' },
  { name: '--m-color-info-light-9', value: 'rgb(239.2, 239.2, 239.2)', category: 'color', subcategory: 'info' },

  // 尺寸
  { name: '--m-size', value: '32px', category: 'size' },
  { name: '--m-size-small', value: '24px', category: 'size' },
  { name: '--m-size-large', value: '40px', category: 'size' },

  // 间距
  { name: '--m-space-smaller', value: '4px', category: 'spacing' },
  { name: '--m-space-medium', value: '16px', category: 'spacing' },
  { name: '--m-space-larger', value: '24px', category: 'spacing' },
  { name: '--m-space', value: '12px', category: 'spacing' },
  { name: '--m-space-small', value: '8px', category: 'spacing' },
  { name: '--m-space-large', value: '20px', category: 'spacing' },

  // 填充色
  { name: '--m-fill-color', value: '#ffffff', category: 'color', subcategory: 'fill' },
  { name: '--m-fill-color-light', value: '#f5f7fa', category: 'color', subcategory: 'fill' },
  { name: '--m-fill-color-dark', value: '#ebedf0', category: 'color', subcategory: 'fill' },

  // 字体大小
  { name: '--m-font-size-smaller', value: '12px', category: 'typography', subcategory: 'size' },
  { name: '--m-font-size-medium', value: '16px', category: 'typography', subcategory: 'size' },
  { name: '--m-font-size-larger', value: '20px', category: 'typography', subcategory: 'size' },
  { name: '--m-font-size', value: '14px', category: 'typography', subcategory: 'size' },
  { name: '--m-font-size-small', value: '13px', category: 'typography', subcategory: 'size' },
  { name: '--m-font-size-large', value: '18px', category: 'typography', subcategory: 'size' },

  // 字体颜色
  { name: '--m-font-color', value: '#333333', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-hover', value: 'var(--m-color-primary)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-disabled', value: '#c5c8ce', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-white', value: 'var(--m-color-white)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-black', value: 'var(--m-color-black)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-primary', value: 'var(--m-color-primary)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-success', value: 'var(--m-color-success)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-warning', value: 'var(--m-color-warning)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-danger', value: 'var(--m-color-danger)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-error', value: 'var(--m-color-error)', category: 'typography', subcategory: 'color' },
  { name: '--m-font-color-info', value: 'var(--m-color-info)', category: 'typography', subcategory: 'color' },

  // 边框
  { name: '--m-border-width', value: '1px', category: 'border' },
  { name: '--m-border-style', value: 'solid', category: 'border' },
  { name: '--m-border-color-lighter', value: '#ebeef5', category: 'border', subcategory: 'color' },
  { name: '--m-border-color-darker', value: '#cdd0d6', category: 'border', subcategory: 'color' },
  { name: '--m-border-color', value: '#dcdfe6', category: 'border', subcategory: 'color' },
  { name: '--m-border-color-light', value: '#e4e7ed', category: 'border', subcategory: 'color' },
  { name: '--m-border-color-dark', value: '#d4d7de', category: 'border', subcategory: 'color' },

  // 圆角
  { name: '--m-border-radius', value: '6px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-small', value: '4px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-smaller', value: '2px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-large', value: '8px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-larger', value: '10px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-round', value: '20px', category: 'border', subcategory: 'radius' },
  { name: '--m-border-radius-circle', value: '50%', category: 'border', subcategory: 'radius' },

  // 遮罩
  { name: '--m-mask-color', value: 'rgba(255, 255, 255, 0.5)', category: 'effect' },
  { name: '--m-mask-color-light', value: 'rgba(255, 255, 255, 0.3)', category: 'effect' },
  { name: '--m-mask-color-dark', value: 'rgba(255, 255, 255, 0.7)', category: 'effect' },

  // 动画
  { name: '--m-duration', value: '0.3s', category: 'animation' },
  { name: '--m-duration-fast', value: '0.2s', category: 'animation' },
  { name: '--m-duration-faster', value: '0.1s', category: 'animation' },
  { name: '--m-duration-slow', value: '0.4s', category: 'animation' },
  { name: '--m-duration-slower', value: '0.5s', category: 'animation' },
]

const groupedTokens = computed(() => {
  return variables.reduce((acc, token) => {
    const category = token.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(token)
    return acc
  }, {} as Record<string, DesignToken[]>)
})

function getColorType(name: string) {
  if (name.includes('primary'))
    return 'primary'
  if (name.includes('success'))
    return 'success'
  if (name.includes('warning'))
    return 'warning'
  if (name.includes('danger'))
    return 'danger'
  if (name.includes('error'))
    return 'error'
  if (name.includes('info'))
    return 'info'
  return 'other'
}

function formatValue(value: string) {
  if (value.startsWith('var('))
    return value
  if (value.endsWith('px'))
    return value
  if (/^#([0-9a-f]{3}){1,2}$/i.test(value))
    return value
  return value
}
</script>

<template>
  <div class="design-tokens-container">
    <section v-for="(tokens, category) in groupedTokens" :key="category">
      <h2 class="category-title">
        {{ category }}
      </h2>

      <!-- 颜色展示 -->
      <div v-if="category === 'color'" class="color-grid">
        <div
          v-for="token in tokens"
          :key="token.name"
          class="color-item"
          :data-type="getColorType(token.name)"
        >
          <div
            class="color-swatch"
            :style="{ backgroundColor: token.value }"
          />
          <div class="token-info">
            <div class="token-name">
              {{ token.name }}
            </div>
            <div class="token-value">
              {{ token.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- 尺寸展示 -->
      <div v-else-if="category === 'size'" class="size-grid">
        <div
          v-for="token in tokens"
          :key="token.name"
          class="size-item"
        >
          <div
            class="size-visual"
            :style="{ width: token.value, height: token.value }"
          />
          <div class="token-info">
            <div class="token-name">
              {{ token.name }}
            </div>
            <div class="token-value">
              {{ token.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- 间距展示 -->
      <div v-else-if="category === 'spacing'" class="spacing-grid">
        <div
          v-for="token in tokens"
          :key="token.name"
          class="spacing-item"
        >
          <div
            class="spacing-visual"
            :style="{ width: token.value }"
          />
          <div class="token-info">
            <div class="token-name">
              {{ token.name }}
            </div>
            <div class="token-value">
              {{ token.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- 默认展示 -->
      <div v-else class="default-grid">
        <div
          v-for="token in tokens"
          :key="token.name"
          class="token-item"
        >
          <div class="token-name">
            {{ token.name }}
          </div>
          <code class="token-value">{{ formatValue(token.value) }}</code>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.design-tokens-container {
  padding: 2rem;
}

.category-title {
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--m-border-color);
}

/* 颜色展示样式 */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.color-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: var(--m-border-radius);
  background: var(--m-fill-color-light);
  transition: transform 0.2s;
}

.color-item:hover {
  transform: translateY(-2px);
}

.color-swatch {
  width: 64px;
  height: 64px;
  border-radius: var(--m-border-radius-smaller);
  border: 1px solid var(--m-border-color-lighter);
  margin-right: 1rem;
  flex-shrink: 0;
}

/* 尺寸展示样式 */
.size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.size-visual {
  background: var(--m-color-primary-light-9);
  border: 1px solid var(--m-border-color);
  margin-bottom: 0.5rem;
}

/* 间距展示样式 */
.spacing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.spacing-visual {
  height: 16px;
  background: var(--m-color-info-light-9);
  border-radius: var(--m-border-radius-smaller);
  margin-bottom: 0.5rem;
}

/* 通用样式 */
.token-info {
  flex: 1;
  min-width: 0;
}

.token-name {
  font-size: var(--m-font-size-small);
  color: var(--m-font-color);
  font-weight: 500;
  margin-bottom: 0.25rem;
  word-break: break-word;
}

.token-value {
  font-size: var(--m-font-size-smaller);
  color: var(--m-font-color-info);
  font-family: monospace;
  opacity: 0.8;
}

.default-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.token-item {
  padding: 1rem;
  background: var(--m-fill-color-light);
  border-radius: var(--m-border-radius);
  border: 1px solid var(--m-border-color-lighter);
}
</style>
