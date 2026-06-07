import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Learning Blog',
  description: 'Personal learning notes — frontend, backend, devops',

  // For GitHub project site (MiYuuuA.github.io/blog/)
  base: '/blog/',

  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // --- Navbar ---
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/' },
      { text: 'Backend', link: '/backend/' },
      { text: 'DevOps', link: '/devops/' },
      { text: 'Archive', link: '/archive/' },
    ],

    // --- Sidebar ---
    sidebar: {
      '/frontend/': [
        {
          text: 'Frontend',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/frontend/' },
            {
              text: 'React',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/frontend/react/' },
                { text: 'Hooks Deep Dive', link: '/frontend/react/hooks-deep-dive' },
                { text: 'State Management', link: '/frontend/react/state-management' },
              ],
            },
            {
              text: 'TypeScript',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/frontend/typescript/' },
                { text: 'Advanced Types', link: '/frontend/typescript/advanced-types' },
              ],
            },
          ],
        },
      ],

      '/backend/': [
        {
          text: 'Backend',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/backend/' },
            {
              text: 'Node.js',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/backend/nodejs/' },
                { text: 'Express vs Fastify', link: '/backend/nodejs/express-vs-fastify' },
              ],
            },
            {
              text: 'Databases',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/backend/databases/' },
                { text: 'PostgreSQL Basics', link: '/backend/databases/postgres-basics' },
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
            { text: 'Overview', link: '/devops/' },
            {
              text: 'Docker',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/devops/docker/' },
                { text: 'Docker Compose', link: '/devops/docker/docker-compose' },
              ],
            },
            {
              text: 'CI/CD',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/devops/ci-cd/' },
                { text: 'GitHub Actions Intro', link: '/devops/ci-cd/github-actions-intro' },
              ],
            },
          ],
        },
      ],

      '/archive/': [
        {
          text: 'Archive',
          items: [
            { text: 'By Date', link: '/archive/' },
          ],
        },
      ],
    },

    // --- Right-side TOC ---
    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    // --- Footer ---
    footer: {
      message: 'Built with VitePress',
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
      pattern: 'https://github.com/MiYuuuA/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    // --- Prev/Next ---
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
