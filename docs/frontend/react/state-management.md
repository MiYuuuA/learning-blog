---
title: State Management in React
date: 2026-05-28
tags:
  - react
  - state-management
  - zustand
  - redux
category: frontend
project: react
description: Comparing state management approaches in React — Context API, Zustand, Redux Toolkit, and Jotai.
---

# State Management in React

Managing state is one of the hardest problems in frontend development. Here's what I learned.

## The Problem

As your React app grows, passing props through many levels ("prop drilling") becomes unmanageable. You need a way to share state across distant components.

## Solutions Compared

| Library | Bundle Size | Learning Curve | Best For |
|---------|------------|----------------|----------|
| Context API | 0 (built-in) | Easy | Small apps, theme/auth |
| Zustand | ~1 KB | Very easy | Medium apps |
| Redux Toolkit | ~11 KB | Moderate | Large apps, teams |
| Jotai | ~3 KB | Easy | Atomic state, performance |

## Context API

Built into React. Good for values that change infrequently (theme, locale, auth status).

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

My current favorite. Minimal boilerplate, no providers needed.

```ts
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
```

## Redux Toolkit

Best for complex async workflows and large teams. Built-in immutability via Immer.

```ts
const slice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
  },
})
```

## Conclusion

- **Personal projects** → Zustand (simple, powerful)
- **Team projects** → Redux Toolkit (predictable, well-structured)
- **Small features** → Context API (no extra dependency)
