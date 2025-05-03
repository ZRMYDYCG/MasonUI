# Input 输入框

通过鼠标或键盘输入内容，支持多种输入类型。

## 基础使用

最基础的输入框用法。

<demo vue="./example/base.vue" />

## 禁用状态

通过 `disabled` 属性禁用输入框。

<demo vue="./example/disabled.vue" />

## 不同尺寸

通过 `size` 属性指定输入框尺寸，可选值：small / medium / large。

<demo vue="./example/size.vue" />

## 复合型输入框

通过插槽添加前缀或后缀内容。

<demo vue="./example/combination.vue" />

## 文本域

通过 `type="textarea"` 切换为多行文本输入。

<demo vue="./example/textarea.vue" />

## 密码输入

通过 `show-password` 属性切换密码可见性。

<demo vue="./example/password.vue" />

## 可清空输入

通过 `clearable` 属性添加清除按钮。

<demo vue="./example/clearable.vue" />

## 前后缀图标

通过 prefix/suffix 插槽添加图标。

<demo vue="./example/prefix-suffix.vue" />


## API

| 属性名         | 说明                     | 类型      | 默认值   |
|---------------|--------------------------|-----------|---------|
| v-model       | 绑定值                   | String    | -       |
| type          | 输入框类型               | text/textarea/password | text |
| size          | 输入框尺寸               | small/medium/large | medium |
| disabled      | 禁用状态                 | Boolean   | false   |
| placeholder   | 占位文本                 | String    | -       |
| clearable     | 是否可清空               | Boolean   | false   |
| show-password | 是否显示密码切换按钮     | Boolean   | false   |
