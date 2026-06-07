---
title: React Hooks Deep Dive
date: 2026-05-15
tags:
  - react
  - hooks
  - frontend
category: frontend
project: react
description: A thorough exploration of React's built-in hooks — useState, useEffect, useMemo, useCallback, and custom hooks.
---

# React Hooks Deep Dive

## useState

`useState` is the most fundamental hook. It lets you add state to function components.

```jsx
const [count, setCount] = useState(0)
```

### Lazy Initialization

When the initial state is expensive to compute, pass a function:

```jsx
const [data, setData] = useState(() => {
  return computeExpensiveValue()
})
```

## useEffect

`useEffect` handles side effects: data fetching, subscriptions, DOM mutations.

```jsx
useEffect(() => {
  const subscription = api.subscribe(id)
  return () => subscription.unsubscribe()
}, [id])
```

### Cleanup

The return function runs before the effect re-runs and on unmount. Always clean up subscriptions, timers, and event listeners.

## useMemo and useCallback

- **`useMemo`** memoizes a **value** — useful for expensive computations.
- **`useCallback`** memoizes a **function** — useful for stable references passed to child components.

::: warning Don't overuse
Only use them when you have measured a performance problem. Premature memoization adds complexity without benefit.
:::

## Custom Hooks

Custom hooks are functions that start with `use` and can call other hooks:

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return width
}
```

## Key Takeaways

1. Always follow the [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks).
2. Prefer `useState` and `useEffect` for most cases.
3. Reach for `useMemo` / `useCallback` only when profiling shows it helps.
4. Extract reusable logic into custom hooks — they compose beautifully.
