import { render } from '@testing-library/vue'
import Button from '../src/button'
//基础按钮测试
test('按钮正常工作', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})
