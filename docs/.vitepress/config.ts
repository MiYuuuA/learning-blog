import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '学习博客',
  description: '个人学习笔记 — 前端、后端、DevOps',

  // For GitHub project site (MiYuuuA.github.io/learning-blog/)
  base: '/learning-blog/',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // --- Navbar ---
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend/' },
      { text: 'DevOps', link: '/devops/' },
      { text: '归档', link: '/archive/' },
    ],

    // --- Sidebar ---
    sidebar: {
      '/frontend/': [
        {
          text: '前端',
          collapsed: false,
          items: [
            { text: '概览', link: '/frontend/' },
            {
              text: 'React',
              collapsed: true,
              items: [
                { text: '概览', link: '/frontend/react/' },
                { text: 'Hooks 深入', link: '/frontend/react/hooks-deep-dive' },
                { text: '状态管理', link: '/frontend/react/state-management' },
              ],
            },
            {
              text: 'TypeScript',
              collapsed: true,
              items: [
                { text: '概览', link: '/frontend/typescript/' },
                { text: '高级类型', link: '/frontend/typescript/advanced-types' },
              ],
            },
          ],
        },
      ],

      '/backend/': [
        {
          text: '后端',
          collapsed: false,
          items: [
            { text: '概览', link: '/backend/' },
            {
              text: 'Node.js',
              collapsed: true,
              items: [
                { text: '概览', link: '/backend/nodejs/' },
                { text: 'Express vs Fastify', link: '/backend/nodejs/express-vs-fastify' },
              ],
            },
            {
              text: '数据库',
              collapsed: true,
              items: [
                { text: '概览', link: '/backend/databases/' },
                { text: 'PostgreSQL 基础', link: '/backend/databases/postgres-basics' },
              ],
            },
          ],
        },
      ],

      '/devops/': [
        {
          text: 'DevOps',
          collapsed: false,
          items: [
            { text: '概览', link: '/devops/' },
            {
              text: 'Docker',
              collapsed: true,
              items: [
                { text: '概览', link: '/devops/docker/' },
                { text: 'Docker Compose', link: '/devops/docker/docker-compose' },
              ],
            },
            {
              text: 'CI/CD',
              collapsed: true,
              items: [
                { text: '概览', link: '/devops/ci-cd/' },
                { text: 'GitHub Actions 入门', link: '/devops/ci-cd/github-actions-intro' },
              ],
            },
            {
              text: 'Test',
              collapsed: true,
              items: [
                { text: '概览', link: '/devops/test/' },
                { text: 'test', link: '/devops/test/test' },
              ],
            },
          ],
        },
      ],

      '/archive/': [
        {
          text: '归档',
          items: [
            { text: '按日期', link: '/archive/' },
          ],
        },
      ],
    },

    // --- Right-side TOC ---
    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    // --- Footer ---
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026',
    },

    // --- Social links ---
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MiYuuuA' },
    ],

    // --- Search ---
    search: {
      provider: 'local',
    },

    // --- Edit link ---
    editLink: {
      pattern: 'https://github.com/MiYuuuA/learning-blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    // --- Prev/Next ---
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
