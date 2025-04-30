# Icon 图标

图标组件用于展示一些图标。

## 基础使用

<demo vue="./example/base.vue" />

## 颜色

<demo vue="./example/color.vue" />

## 尺寸

<demo vue="./example/size.vue" />

## 组合使用

<demo vue="./example/combination.vue" />

## Icon API

| 属性名 | 类型              | 默认值 | 必填 | 说明                                                                 |
|--------|-----------------|--------|------|----------------------------------------------------------------------|
| name   | `string`        | 无     | 是   | 图标的名称，该属性使用了 `@mason-ui/hooks` 中的 `useIconProp`，需要传入一个有效的图标名称。 |
| color  | `string`        | 无     | 否   | 图标的颜色，可以传入任何有效的 CSS 颜色值，如 `red`, `#ff0000`, `rgba(255, 0, 0, 1)` 等。 |
| size   | `number` `string` | 无     | 否   | 图标的大小，可以传入一个数字（单位默认为 `px`）或一个带单位的字符串，如 `24`, `'24px'`, `'1rem'` 等。 |


## Icon Emits

<NullData message="暂无定义事件" />

<script>
import NullData from '../../../docs/.vitepress/components/null-data.vue'
</script>