import type { SvgType } from '@mason-ui/svgs'
import type { PropType } from 'vue'

export function useIconProp() {
  return {
    type: String as PropType<SvgType>,
  }
}
