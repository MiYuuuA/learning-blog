---
title: Express vs Fastify
date: 2026-05-20
tags:
  - nodejs
  - backend
  - express
  - fastify
category: backend
project: nodejs
description: 对比 Express 和 Fastify — 两个流行的 Node.js Web 框架。
---

# Express vs Fastify

两个最流行的 Node.js Web 框架的对比分析。

## Express

多年的业界标准。极简、灵活、庞大的生态。

```js
const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000)
```

### 优点
- 庞大的中间件生态
- 每个 Node 开发者都熟悉
- 心智模型简单

### 缺点
- 无内置验证
- 基于回调（早于 ES 模块时代）
- 比新兴方案慢

## Fastify

为速度而生。基于 Schema、插件化、一流的 TypeScript 支持。

```js
const fastify = require('fastify')()

fastify.get('/hello', {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: { message: { type: 'string' } }
      }
    }
  }
}, async () => ({ message: 'Hello World' }))

fastify.listen({ port: 3000 })
```

### 优点
- 比 Express 快 2-3 倍
- 内置 JSON Schema 验证
- 原生 async/await、TypeScript 支持
- 通过 Pino 实现结构化日志

### 缺点
- 生态较小
- 学习曲线略陡

## 如何选择

| 场景 | 推荐 |
|----------|---------------|
| 遗留项目、团队熟悉 Express | Express |
| 新项目、重视性能 | Fastify |
| 简单 API 或原型 | Express |
| 需要验证的生产环境 API | Fastify |

## 总结

对于新项目，**优先选择 Fastify**。内置的验证和速度优势会随着应用的增长而放大。如果你需要最大的生态兼容性或正在教授初学者，Express 仍然是不错的选择。
