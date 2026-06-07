---
title: 归档
---

<script setup>
import { data } from './posts.data.ts'

// 按年份分组
const byYear = {}
for (const post of data) {
  const year = new Date(post.date).getFullYear()
  if (!byYear[year]) byYear[year] = []
  byYear[year].push(post)
}
</script>

# 归档

所有文章，按日期排序。点击任意标题即可阅读。

<div v-for="(posts, year) in byYear" :key="year" style="margin-bottom: 2rem;">
  <h2>{{ year }}</h2>
  <ul>
    <li v-for="post in posts" :key="post.url" style="margin-bottom: 0.5rem;">
      <a :href="post.url">{{ post.title }}</a>
      <span style="color: var(--vp-c-text-2); font-size: 0.85em;">
        — {{ new Date(post.date).toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' }) }}
      </span>
      <span style="font-size: 0.8em; color: var(--vp-c-text-3);">
        分类：{{ post.category }}/{{ post.project }}
      </span>
      <span v-if="post.excerpt" style="display: block; font-size: 0.85em; color: var(--vp-c-text-2); margin-top: 0.15rem;">
        {{ post.excerpt }}
      </span>
    </li>
  </ul>
</div>
