<script setup lang="ts">
import type { inputEmits, inputProps } from './type'
import { useNamespace } from '@mason-ui/hooks'
import { computed, ref, watch } from 'vue'
import MIcon from '../../icon/src/icon.vue'

defineOptions({
  name: 'MInput',
})

const props = withDefaults(defineProps<inputProps>(), {
  type: 'text',
})

const emits = defineEmits<inputEmits>()

const ns = useNamespace('input')

const innerValue = ref(props.modelValue)

const isFocus = ref(false)
const showClear = computed(() => {
  return props.clearable && !props.disabled && !!innerValue.value && isFocus.value
})

function handleInput() {
  emits('update:modelValue', innerValue.value)
}

function handleFocus() {
  isFocus.value = true
}

function handleBlur() {
  isFocus.value = false
}

function clear() {
  innerValue.value = ''
  emits('update:modelValue', '')
}

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
        <input v-model="innerValue" class="m-input__inner" :type="type" :disabled="disabled" @input="handleInput" @focus="handleFocus" @blur="handleBlur">
        <!--   suffix slot -->
        <span v-if="$slots.suffix || showClear" class="m-input__suffix" @click="clear" @mousedown.prevent>
          <slot name="suffix" />
          <MIcon v-if="showClear" name="CloseCircle" class="m-input__clear" />
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
      <textarea v-model="innerValue" class="m-textarea__wrapper" :disabled="disabled" @input="handleInput" @focus="handleFocus" @blur="handleBlur" />
    </template>
  </div>
</template>

<style scoped>

</style>
