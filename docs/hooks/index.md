# Hooks 文档

## `useNamespace`

一个用于生成 BEM (Block, Element, Modifier) 类名的工具函数。

```ts
export const defaultNamespace = 'm'
const statePrefix = 'is-'

function _bem(namespace: string, block: string, blockSuffix: string, element: string, modifier: string) {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export function useNamespace(block: string) {
  const namespace = defaultNamespace
  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '')
  const e = (element?: string) => (element ? _bem(namespace, block, '', element, '') : '')
  const m = (modifier?: string) => (modifier ? _bem(namespace, block, '', '', modifier) : '')

  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : ''

  const is = (name: string, state: boolean | undefined = true) =>
    state ? `${statePrefix}${name}` : ''

  return {
    namespace,
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}
```

### 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| `block` | `string` | BEM 中的块名称 |

### 返回值

返回一个包含以下方法的对象：

| 方法名 | 参数 | 说明 | 示例 |
|--------|------|------|------|
| `namespace` | - | 默认命名空间 (`'m'`) | `'m'` |
| `b` | `blockSuffix?: string` | 生成块级类名 | `'m-block'` |
| `e` | `element?: string` | 生成元素类名 | `'m-block__element'` |
| `m` | `modifier?: string` | 生成修饰符类名 | `'m-block--modifier'` |
| `be` | `blockSuffix?: string`, `element?: string` | 生成带后缀的块元素类名 | `'m-block-suffix__element'` |
| `bm` | `blockSuffix?: string`, `modifier?: string` | 生成带后缀的块修饰符类名 | `'m-block-suffix--modifier'` |
| `em` | `element?: string`, `modifier?: string` | 生成带修饰符的元素类名 | `'m-block__element--modifier'` |
| `bem` | `blockSuffix?: string`, `element?: string`, `modifier?: string` | 生成完整的 BEM 类名 | `'m-block-suffix__element--modifier'` |
| `is` | `name: string`, `state: boolean = true` | 生成状态类名 | `state=true` 时返回 `'is-active'` |

## `useIconProp`

一个用于在 Vue 组件中定义图标 prop 的工具函数。

```ts
import type { SvgType } from '@mason-ui/svgs'
import type { PropType } from 'vue'

export function useIconProp() {
  return {
    type: String as PropType<SvgType>,
  }
}
```

### 返回值

返回一个 prop 定义对象，结构如下：

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `type` | `String as PropType<SvgType>` | 定义接受 `@mason-ui/svgs` 中 `SvgType` 类型字符串的 prop |
