---
title: Archive
---

<script setup>
import { data } from './posts.data.ts'

// Group by year
const byYear = {}
for (const post of data) {
  const year = new Date(post.date).getFullYear()
  if (!byYear[year]) byYear[year] = []
  byYear[year].push(post)
}
</script>

# Archive

All posts, ordered by date. Click any title to read.

<div v-for="(posts, year) in byYear" :key="year" style="margin-bottom: 2rem;">
  <h2>{{ year }}</h2>
  <ul>
    <li v-for="post in posts" :key="post.url" style="margin-bottom: 0.5rem;">
      <a :href="post.url">{{ post.title }}</a>
      <span style="color: var(--vp-c-text-2); font-size: 0.85em;">
        — {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }}
      </span>
      <span style="font-size: 0.8em; color: var(--vp-c-text-3);">
        in {{ post.category }}/{{ post.project }}
      </span>
      <span v-if="post.excerpt" style="display: block; font-size: 0.85em; color: var(--vp-c-text-2); margin-top: 0.15rem;">
        {{ post.excerpt }}
      </span>
    </li>
  </ul>
</div>
