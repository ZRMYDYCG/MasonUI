<script setup lang="ts">
import type { Ref } from 'vue'
import type { inputEmits, inputProps } from './type'
import { useNamespace } from '@mason-ui/hooks'
import { computed, nextTick, ref, useAttrs, watch } from 'vue'
import MIcon from '../../icon/src/icon.vue'

defineOptions({
  name: 'MInput',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<inputProps>(), {
  type: 'text',
  autocomplete: 'off',
})

const emits = defineEmits<inputEmits>()

const attrs = useAttrs()

const ns = useNamespace('input')

const innerValue = ref(props.modelValue)

const inputRef = ref() as Ref<HTMLInputElement | HTMLTextAreaElement>

const isFocus = ref(false)
const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocus.value
})
const passwordVisible = ref(false)
const showPasswordArea = computed(() => {
  return props.showPassword && !props.disabled && !!innerValue.value
})
function togglePasswordVisible() {
  passwordVisible.value = !passwordVisible.value
}

async function keepFocus() {
  await nextTick()
  inputRef.value.focus()
}

function handleInput() {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}

function handleChange() {
  emits('change', innerValue.value)
}

function handleFocus(event: FocusEvent) {
  isFocus.value = true
  emits('focus', event)
}

function handleBlur(event: FocusEvent) {
  isFocus.value = false
  emits('blur', event)
}

function clear() {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}

defineExpose({
  ref: inputRef,
})

watch(
  () => props.modelValue,
  (value) => {
    innerValue.value = value
  },
)
</script>

<template>
  <div
    :class="[
      ns.b(),
      `m-input--${type}`,
      `m-input--${size}`,
      { 'is-disabled': disabled },
      { 'is-prepend': $slots.prepend },
      { 'is-append': $slots.append },
      { 'is-prefix': $slots.prefix },
      { 'is-suffix': $slots.suffix },
      { 'is-focus': isFocus },
    ]"
  >
    <!--  input  -->
    <template v-if="type !== 'textarea'">
      <!--  prepend slot  -->
      <template v-if="$slots.prepend">
        <div class="m-input__prepend">
          <slot name="prepend" />
        </div>
      </template>
      <div class="m-input__wrapper">
        <!--   prefix slot  -->
        <span v-if="$slots.prefix" class="m-input__prefix">
          <slot name="prefix" />
        </span>
        <input ref="inputRef" v-bind="attrs" v-model="innerValue" :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" class="m-input__inner" :disabled="disabled" :placeholder="placeholder" :autocomplete="autocomplete" :auto-focus="autoFocus" :form="form" :readonly="readonly" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
        <!--   suffix slot -->
        <span v-if="$slots.suffix || showClear || showPasswordArea" class="m-input__suffix" @mousedown.prevent @click="keepFocus">
          <slot name="suffix" />
          <MIcon v-if="showClear" name="CloseCircle" class="m-input__clear" @click="clear" />
          <MIcon v-if="showPasswordArea && passwordVisible" name="EyeClose" class="m-input__password" @click="togglePasswordVisible" />
          <MIcon v-if="showPasswordArea && !passwordVisible" name="EyeOpen" class="m-input__password" @click="togglePasswordVisible" />
        </span>
      </div>
      <!--  append slot  -->
      <template v-if="$slots.append">
        <div class="m-input__append">
          <slot name="append" />
        </div>
      </template>
    </template>
    <!--  textarea  -->
    <template v-else>
      <textarea ref="inputRef" v-bind="attrs" v-model="innerValue" class="m-textarea__wrapper" :disabled="disabled" :placeholder="placeholder" :autocomplete="autocomplete" :auto-focus="autoFocus" :form="form" :readonly="readonly" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
    </template>
  </div>
</template>

<style scoped>

</style>
