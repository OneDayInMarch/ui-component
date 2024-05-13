import { App } from 'vue'
import Button from './src/button'
//具名导出
export { Button }
//插件导出
export default {
  install(app: App) {
    app.component(Button.name as string, Button)
  }
}
