import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/binary-coffee-blog/',
  title: 'Binary Coffee',
  description: 'Binary Coffee Blog built with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' }
    ],
    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'First Post', link: '/2025-09-24-first-post' },
          { text: 'Second Post', link: '/2025-09-24-second-post' }
        ]
      }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  },
  // VitePress will automatically load `docs/.vitepress/styles/index.css`
})
