import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '深入浅出Vite',
        link: '/vite/',
      },
    ],
    sidebar: {
      '/vite/': [
        {
          text: '深入浅出Vite',
          children: [
            '/vite/README.md',
            '/vite/2.md',
            '/vite/3.md',
            '/vite/4.md',
            '/vite/5.md',
            '/vite/6.md',
            '/vite/7.md',
            '/vite/8.md',
            '/vite/9.md',
            '/vite/10.md',
            '/vite/11.md',
            '/vite/12.md',
            '/vite/13.md',
            '/vite/14.md',
            '/vite/15.md',
            '/vite/16.md',
            '/vite/17.md',
            '/vite/18.md',
            '/vite/19.md',
            '/vite/20.md',
            '/vite/21.md',
            '/vite/22.md',
            '/vite/23.md',
            '/vite/24.md',
            '/vite/25.md',
            '/vite/26.md',
            '/vite/27.md',
            '/vite/28.md',
          ],
        }
      ]
    },
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
}