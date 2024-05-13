import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UI-Component 文档',
  description: 'Vue3组件库开发文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {
            text: '通用组件',
            items: [
              { text: 'Button 按钮', link: '/components/button/index.md' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
