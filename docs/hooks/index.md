# Hooks 文档

## `useNamespace`

一个用于生成 BEM (Block, Element, Modifier) 类名的工具函数。

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

### 返回值

返回一个 prop 定义对象，结构如下：

| 属性名 | 类型 | 说明 |
|--------|------|------|
| `type` | `String as PropType<SvgType>` | 定义接受 `@mason-ui/svgs` 中 `SvgType` 类型字符串的 prop |
