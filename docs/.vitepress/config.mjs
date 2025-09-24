import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/binary-coffee-blog/',
  title: 'Binary Coffee',
  description: 'Binary Coffee Blog built with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
})
