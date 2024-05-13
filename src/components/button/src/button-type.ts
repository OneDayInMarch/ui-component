import { PropType, ExtractPropTypes } from 'vue'

// 定义按钮类型枚举
export type IButtonType = 'primary' | 'secondary' | 'text'

// 定义按钮组件的属性对象
export const buttonProps = {
  // 按钮类型属性，类型为 IButtonType 枚举类型，默认值为 'secondary'
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  }
} as const

// 提取 buttonProps 对象中的属性类型，用于在组件中声明属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
