# Button 按钮

:::warning 注意事项
1. **上下文继承**：当按钮位于`MButtonGroup`内时，`size/type/disabled`属性将继承组件的设置，单个按钮显式设置的属性具有更高优先级
2. **图标使用**：同时设置`icon` prop和`icon` slot时，slot内容会覆盖prop
3. **节流机制**：启用`use-throttle`后，连续点击只会触发最后一次的有效事件
4. **加载状态**：当`loading`为true时，按钮会自动进入禁用状态
5. **无障碍**：使用`button`标签时自动支持键盘聚焦，使用其他标签时需自行处理无障碍特性
:::

## 基础用法

常用的操作按钮，支持自定义图标、加载状态、组合使用等。

<demo vue="./example/base.vue" />

## 不同尺寸

<demo vue="./example/size.vue" />

## 禁用状态

<demo vue="./example/disable.vue" />

## 加载状态

<demo vue="./example/loading.vue" />


## 图标按钮

<demo vue="./example/icon.vue" />

## 形状样式
<demo vue="./example/shape.vue" />

## 节流控制

<demo vue="./example/throttling.vue" />

## 按钮组

<demo vue="./example/group.vue" />

## Button Props

| 属性名             | 类型                           | 默认值     | 说明                                                                 |
|-------------------|-------------------------------|-----------|--------------------------------------------------------------------|
| tag               | `string \| Component`         | 'button'  | 自定义组件标签                                                       |
| type              | `ButtonType`                  | 'default' | 按钮类型，可选值：primary/success/warning/danger/info               |
| size              | `ButtonSize`                  | 'default' | 按钮尺寸，可选值：large/default/small                               |
| disabled          | `boolean`                     | false     | 是否禁用状态                                                        |
| loading           | `boolean`                     | false     | 是否加载状态                                                        |
| icon              | `string`                      | -         | 图标名称（当需要单独设置加载图标时使用 loading-icon）                  |
| circle            | `boolean`                     | false     | 是否圆形按钮                                                        |
| plain             | `boolean`                     | false     | 是否朴素样式                                                        |
| round             | `boolean`                     | false     | 是否圆角按钮                                                        |
| loadingIcon       | `string`                      | 'LoadingArc' | 自定义加载图标名称                                                   |
| autoFocus         | `boolean`                     | false     | 是否自动聚焦                                                        |
| useThrottle       | `boolean`                     | false     | 是否启用点击节流                                                     |
| throttleDuration  | `number`                      | 1000      | 节流时间（毫秒）                                                     |

## Button Events

| 事件名  | 类型                | 说明           |
|--------|---------------------|---------------|
| click  | `MouseEvent`        | 点击按钮时触发 |

## Button Slots

| 名称   | 说明               |
|--------|--------------------|
| default | 按钮内容           |
| icon    | 自定义图标内容      |

## ButtonGroup Props

| 属性名    | 类型          | 默认值     | 说明                                   |
|----------|--------------|-----------|----------------------------------------|
| size     | `ButtonSize` | 'default' | 组内按钮尺寸，优先级低于单个按钮的size   |
| type     | `ButtonType` | 'default' | 组内按钮类型，优先级低于单个按钮的type   |
| disabled | `boolean`    | false     | 组内按钮禁用状态，优先级低于单个按钮设置 |
