import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-type'
import '../style/button.scss'

export default defineComponent({
  name: 'UButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button class={`u-btn u-btn--${type.value} u-btn--${size.value}`}>
          {defaultSlot}
        </button>
      )
    }
  }
})
