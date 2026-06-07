import { createContentLoader } from 'vitepress'

export default createContentLoader([
  '/frontend/**/*.md',
  '/backend/**/*.md',
  '/devops/**/*.md',
], {
  includeSrc: false,
  render: false,
  excerpt: true,
  transform(raw) {
    return raw
      .filter(page => page.frontmatter.date)
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map(page => ({
        title: page.frontmatter.title || page.url,
        url: page.url,
        date: page.frontmatter.date,
        category: page.frontmatter.category || '',
        project: page.frontmatter.project || '',
        tags: page.frontmatter.tags || [],
        excerpt: page.frontmatter.description || '',
      }))
  },
})
