# Utils 工具集文档

## 类型判断工具函数

### `isString`
判断值是否为字符串类型

```typescript
export const isString = (value: any): value is string => typeof value === 'string'
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是字符串则返回 true

### `isNumber`
判断值是否为数字类型

```typescript
export const isNumber = (value: any): value is number => typeof value === 'number'
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是数字则返回 true

### `isBoolean`
判断值是否为布尔类型

```typescript
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是布尔值则返回 true

### `isUndefined`
判断值是否为 undefined

```typescript
export const isUndefined = (value: any): value is undefined => value === undefined
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是 undefined 则返回 true

### `isStringNumber`
判断值是否为可转换为数字的字符串

```typescript
export function isStringNumber(value: any): value is string {
  return isString(value) && !Number.isNaN(Number(value))
}
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是可转换为数字的字符串则返回 true

### `isObject`
判断值是否为对象

```typescript
export function isObject(value: any): value is Record<any, any> {
  return value !== null && typeof value === 'object'
}
```

| 参数 | 类型 | 说明 |
|------|------|------|
| value | any | 要判断的值 |

**返回值**: `boolean` - 如果是对象则返回 true

## Vue 相关工具函数

### `withInstall`
为组件添加 install 方法，使其可以作为 Vue 插件使用

```typescript
export function withInstall<T extends Component | DefineComponent>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const { name } = component as unknown as { name: string }
    app.component(name, component)
  }
  return component as SFCWithInstall<T>
}
```

| 参数 | 类型 | 说明 |
|------|------|------|
| component | `Component | DefineComponent` | Vue 组件 |

**返回值**: 带有 install 方法的组件

**类型定义**:
```typescript
export type SFCWithInstall<T> = T & Plugin
```

## 单位处理工具函数

### `addUnit`
为数值添加单位，如果已有单位则直接返回

```typescript
export function addUnit(value?: string | number, unit = 'px') {
  if (!value)
    return ''
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${unit}`
  }
  else if (isString(value)) {
    return value
  }
}
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | `string | number | undefined` | - | 要添加单位的值 |
| unit | `string` | `'px'` | 要添加的单位 |

**返回值**: `string` - 带单位的字符串或空字符串