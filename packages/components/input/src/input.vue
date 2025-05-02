<script setup lang="ts">
import type { inputEmits, inputProps } from './type'
import { useNamespace } from '@mason-ui/hooks'
import { ref, watch } from 'vue'

defineOptions({
  name: 'MInput',
})

const props = withDefaults(defineProps<inputProps>(), {
  type: 'text',
})

const emits = defineEmits<inputEmits>()

const ns = useNamespace('input')

const innerValue = ref(props.modelValue)

function handleInput() {
  emits('update:modelValue', innerValue.value)
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
        <input v-model="innerValue" class="m-input__inner" :type="type" :disabled="disabled">
        <!--   suffix slot -->
        <span v-if="$slots.suffix" class="m-input__suffix">
          <slot name="suffix" />
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
      <textarea v-model="innerValue" class="m-textarea__wrapper" :disabled="disabled" @input="handleInput" />
    </template>
  </div>
</template>

<style scoped>

</style>
