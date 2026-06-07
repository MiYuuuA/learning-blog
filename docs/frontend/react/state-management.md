---
title: React 状态管理
date: 2026-05-28
tags:
  - react
  - state-management
  - zustand
  - redux
category: frontend
project: react
description: 对比 React 中的状态管理方案 — Context API、Zustand、Redux Toolkit 和 Jotai。
---

# React 状态管理

状态管理是前端开发中最困难的问题之一。以下是我的学习总结。

## 问题所在

随着 React 应用的增长，通过多层组件传递 props（"prop 钻孔"）变得越来越难以维护。你需要一种在远距离组件之间共享状态的方式。

## 方案对比

| 方案 | 打包体积 | 学习曲线 | 最适合 |
|---------|------------|----------------|----------|
| Context API | 0（内置） | 简单 | 小型应用、主题/认证 |
| Zustand | ~1 KB | 非常简单 | 中型应用 |
| Redux Toolkit | ~11 KB | 中等 | 大型应用、团队协作 |
| Jotai | ~3 KB | 简单 | 原子化状态、性能敏感 |

## Context API

React 内置方案。适用于不频繁变化的值（主题、语言、认证状态）。

```jsx
const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  )
}
```

## Zustand

我目前最喜欢的方案。极少的模板代码，无需 Provider。

```ts
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

## Redux Toolkit

最适合复杂的异步工作流和大型团队。通过 Immer 内置不可变数据支持。

```ts
const slice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
  },
})
```

## 总结

- **个人项目** → Zustand（简洁、强大）
- **团队项目** → Redux Toolkit（可预测、结构清晰）
- **小型功能** → Context API（无需额外依赖）
