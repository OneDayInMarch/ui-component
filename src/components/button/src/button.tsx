import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-type' // 引入按钮属性和类型
import '../style/button.scss' // 引入按钮样式

export default defineComponent({
  name: 'UButton', // 定义组件名为 UButton
  props: buttonProps, // 使用按钮属性
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props) // 将 props 解构为响应式对象
    const blockClass = block.value ? 'u-btn--block' : '' // 根据 block 属性值确定是否添加 block 样式类
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮' // 获取默认插槽内容，若无则显示默认文字“按钮”
      // 动态绑定样式类
      // 根据 disabled 属性值设置按钮是否禁用
      return (
        <button
          class={`u-btn u-btn--${type.value} u-btn--${size.value} ${blockClass}`}
          disabled={disabled.value}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
