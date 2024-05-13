import { PropType, ExtractPropTypes } from 'vue'

// 定义按钮类型枚举
export type IButtonType = 'primary' | 'secondary' | 'text'
export type IButtonSize = 'small' | 'medium' | 'large'
// 定义按钮组件的属性对象
export const buttonProps = {
  // 按钮类型属性，类型为 IButtonType 枚举类型，默认值为 'secondary'
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  //按钮尺寸属性，类型为IButtonSize枚举类型，默认值为 'medium'
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const
// 提取 buttonProps 对象中的属性类型，用于在组件中声明属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
