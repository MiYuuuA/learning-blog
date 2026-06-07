---
title: Advanced TypeScript Types
date: 2026-06-01
tags:
  - typescript
  - types
  - frontend
category: frontend
project: typescript
description: Exploring TypeScript's advanced type features — conditional types, mapped types, template literal types, and more.
---

# Advanced TypeScript Types

Going beyond `string` and `number` — here are the type-level features that make TypeScript truly powerful.

## Conditional Types

Types that depend on a condition:

```ts
type IsString<T> = T extends string ? 'yes' : 'no'

type A = IsString<'hello'> // 'yes'
type B = IsString<42>      // 'no'
```

### `infer` keyword

Extract part of a type:

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type Fn = () => number
type R = ReturnType<Fn> // number
```

## Mapped Types

Transform properties of an existing type:

```ts
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}
```

## Template Literal Types

String manipulation at the type level:

```ts
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<'click'> // 'onClick'
```

## Utility Types

TypeScript ships with many built-in utilities:

- `Partial<T>` — all properties optional
- `Required<T>` — all properties required
- `Pick<T, K>` — select a subset of properties
- `Omit<T, K>` — exclude properties
- `Record<K, V>` — object type with known keys

## Key Takeaways

1. Conditional types let you write type-level logic.
2. Mapped types transform existing types without duplication.
3. Template literal types enable string-level type checking.
4. Master the built-in utility types before writing your own.
