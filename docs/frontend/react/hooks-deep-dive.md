---
title: React Hooks 深入
date: 2026-05-15
tags:
  - react
  - hooks
  - frontend
category: frontend
project: react
description: 深入探索 React 内置 Hooks — useState、useEffect、useMemo、useCallback 以及自定义 Hooks。
---

# React Hooks 深入

## useState

`useState` 是最基础的 Hook。它可以让你在函数组件中添加状态。

```jsx
const [count, setCount] = useState(0)
```

### 惰性初始化

当初始状态的计算代价较高时，可以传入一个函数：

```jsx
const [data, setData] = useState(() => {
  return computeExpensiveValue()
})
```

## useEffect

`useEffect` 用于处理副作用：数据获取、订阅、DOM 操作。

```jsx
useEffect(() => {
  const subscription = api.subscribe(id)
  return () => subscription.unsubscribe()
}, [id])
```

### 清理函数

返回的函数会在 effect 重新执行前以及组件卸载时运行。务必清理订阅、定时器和事件监听器。

## useMemo 和 useCallback

- **`useMemo`** 缓存一个**值** — 适用于开销较大的计算。
- **`useCallback`** 缓存一个**函数** — 适用于需要传递给子组件的稳定引用。

::: warning 不要过度使用
只有在确认存在性能问题时才使用它们。过早的记忆化只会增加复杂度而无实际收益。
:::

## 自定义 Hooks

自定义 Hook 是以 `use` 开头的函数，内部可以调用其他 Hooks：

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

## 核心要点

1. 始终遵循 [Hooks 规则](https://react.dev/reference/rules/rules-of-hooks)。
2. 大多数场景优先使用 `useState` 和 `useEffect`。
3. 仅在性能分析表明有必要时才使用 `useMemo` / `useCallback`。
4. 将可复用逻辑抽取为自定义 Hook — 它们的组合性非常优雅。
