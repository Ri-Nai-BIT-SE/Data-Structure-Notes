import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "数据结构与算法设计复习笔记",
  description: "数据结构与算法设计学习笔记总索引",
  srcDir: "docs",
  base: "/Data-Structure-Notes/",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '数据结构',
        items: [
          { text: '绪论', link: '/数据结构/绪论/' },
          { text: '线性表', link: '/数据结构/线性表/' },
          { text: '栈和队列', link: '/数据结构/栈和队列/' },
          { text: '数组和广义表', link: '/数据结构/数组和广义表/' },
          { text: '树和二叉树', link: '/数据结构/树和二叉树/' },
          { text: '图', link: '/数据结构/图/' },
          { text: '查找', link: '/数据结构/查找/' },
          { text: '排序', link: '/数据结构/排序/' }
        ]
      },
      {
        text: '计算理论',
        items: [
          { text: '计算模型', link: '/计算理论/计算模型/' },
          { text: '可计算性', link: '/计算理论/可计算性/' },
          { text: '计算复杂性', link: '/计算理论/计算复杂性/' }
        ]
      }
    ],

    sidebar: {
      '/数据结构/': [
        {
          text: '数据结构',
          link: '/数据结构/',
          items: [
            { text: '绪论', link: '/数据结构/绪论/' },
            { text: '线性表', link: '/数据结构/线性表/' },
            { text: '栈和队列', link: '/数据结构/栈和队列/' },
            { text: '数组和广义表', link: '/数据结构/数组和广义表/' },
            { text: '树和二叉树', link: '/数据结构/树和二叉树/' },
            { text: '图', link: '/数据结构/图/' },
            { text: '查找', link: '/数据结构/查找/' },
            { text: '排序', link: '/数据结构/排序/' }
          ]
        }
      ],
      '/计算理论/': [
        {
          text: '计算理论',
          link: '/数据结构/',
          items: [
            { text: '计算模型', link: '/计算理论/计算模型/' },
            { text: '可计算性', link: '/计算理论/可计算性/' },
            { text: '计算复杂性', link: '/计算理论/计算复杂性/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ri-Nai-BIT-SE/Data-Structure-Notes' }
    ],

    footer: {
      message: '数据结构与算法设计复习笔记',
      copyright: 'Copyright © 2025 Ri-Nai'
    },

    search: {
      provider: 'local'
    }
  }
})
