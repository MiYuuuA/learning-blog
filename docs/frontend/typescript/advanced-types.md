---
title: TypeScript 高级类型
date: 2026-06-01
tags:
  - typescript
  - types
  - frontend
category: frontend
project: typescript
description: 探索 TypeScript 的高级类型特性 — 条件类型、映射类型、模板字面量类型等。
---

# TypeScript 高级类型

超越 `string` 和 `number` — 以下是让 TypeScript 真正强大的类型层面特性。

## 条件类型

根据条件判断的类型：

```ts
type IsString<T> = T extends string ? 'yes' : 'no'

type A = IsString<'hello'> // 'yes'
type B = IsString<42>      // 'no'
```

### `infer` 关键字

提取类型的某一部分：

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type Fn = () => number
type R = ReturnType<Fn> // number
```

## 映射类型

转换已有类型的属性：

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}
```

## 模板字面量类型

类型层面的字符串操作：

```ts
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<'click'> // 'onClick'
```

## 工具类型

TypeScript 内置了许多实用工具类型：

- `Partial<T>` — 所有属性变为可选
- `Required<T>` — 所有属性变为必填
- `Pick<T, K>` — 选取属性的子集
- `Omit<T, K>` — 排除属性
- `Record<K, V>` — 具有已知键的对象类型

## 核心要点

1. 条件类型让你可以编写类型层面的逻辑。
2. 映射类型可以在不重复代码的情况下转换已有类型。
3. 模板字面量类型实现了字符串级别的类型检查。
4. 在编写自定义类型之前，先熟练掌握内置工具类型。
