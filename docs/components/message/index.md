# Message 信息提示

:::tip 提示
Message 组件用于向用户反馈操作结果、提示消息、处理进度等。
:::

:::warning 注意
Message 组件是全局组件，需要在 `main.js` 中引入。

```ts{3,24}
import type { AppContext, Plugin } from 'vue'
import * as components from '@mason-ui/components'
import { Message } from '@mason-ui/components/message'
import Theme from 'vitepress/theme'
// @ts-ignore
import MyLayout from './Layout.vue'
import './index.scss'
import '@mason-ui/theme-chalk/src/index.scss'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }: AppContext) {
    // 引入组件库
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        if (key.startsWith('M')) {
          const element = components[key as keyof typeof components]
          app.use(element as Plugin<[]>)
        }
      }
    }
    // messageProvider
    app.config.globalProperties.$message = Message
  },
}
```
:::

:::tip 组件特点
✅ 即时反馈：无需用户操作，自动触发展示，支持手动关闭

✅ 灵活定位：预设多种全局位置（如顶部居中、底部右侧），消息队列智能堆叠

✅ 类型化设计：内置 Success/Error/Warning/Info 四种语义化样式，图标与颜色自动匹配

✅ 可控生命周期：自由设定持续时间，支持悬停暂停销毁计时

✅ 无障碍支持：默认适配屏幕阅读器
:::

:::info 支持样式通过变量覆盖
--m-space-small

--m-space-large

--m-border-radius-small

--m-color-white

--m-color-success

--m-color-success-light-6

--m-color-error

--m-color-error-light-6

--m-color-warning

--m-color-warning-light-6

--m-color-info

--m-color-info-light-6

--m-duration-slower

--m-font-size
:::

## 基础使用

<demo vue="./example/base.vue" />

## 自定义持续时间

<demo vue="./example/duration.vue" />

## 手动关闭

<demo vue="./example/closeable.vue" />

## 自定义关闭回调

<demo vue="./example/close-callback.vue" />

## 悬停暂停关闭

<demo vue="./example/hover-pause.vue" />

## 多条消息堆叠

<demo vue="./example/queue.vue" />

## Message API

消息类型，可以是以下几种之一：

- `'success'`
- `'error'`
- `'warning'`
- `'info'`

### MessageOptions

消息选项接口，用于配置消息组件，其属性如下：

| 属性名     | 类型                                   | 默认值       | 描述                                                         |
|------------|----------------------------------------|--------------|--------------------------------------------------------------|
| type       | `MessageType`                          |              | 必需，消息类型，可选值为 `'success'`、`'error'`、`'warning'`、`'info'` |
| content    | `string`                               |              | 必需，消息内容                                               |
| duration   | `number`                               | `3000`       | 可选，消息显示时长，单位为毫秒                               |
| onClose    | `() => void`                           | `undefined`  | 可选，消息关闭后的回调函数                                     |
| showClose  | `boolean`                              | `false`      | 可选，是否显示关闭按钮                                         |


## Message Emits

<NullData message="暂无定义事件" />

## Message Slots

<NullData message="暂无插槽" />


## Message Expose

<NullData message="暂无暴露接口" />


<script>
import NullData from '../../../docs/.vitepress/components/null-data.vue'
</script>
