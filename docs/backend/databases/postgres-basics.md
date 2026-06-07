---
title: PostgreSQL 基础
date: 2026-05-22
tags:
  - postgresql
  - database
  - sql
  - backend
category: backend
project: databases
description: PostgreSQL 入门 — 安装配置、常用查询、索引及最佳实践。
---

# PostgreSQL 基础

PostgreSQL 是一个功能强大的开源关系型数据库。以下是基础知识。

## 安装

```bash
# macOS
brew install postgresql@16

# Ubuntu
sudo apt install postgresql

# 启动服务
brew services start postgresql@16   # macOS
sudo systemctl start postgresql     # Linux
```

## 连接数据库

```bash
psql -U postgres
```

或通过 Node.js：

```ts
import pg from 'pg'
const pool = new pg.Pool({ database: 'myapp' })
```

## 常用操作

### 创建表

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 条件查询

```sql
SELECT * FROM users
WHERE created_at > '2026-01-01'
ORDER BY created_at DESC
LIMIT 10;
```

### 联表查询

```sql
SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;
```

## 索引

索引可以加速查询，但会牺牲写入性能。

```sql
-- 单列索引
CREATE INDEX idx_users_email ON users(email);

-- 复合索引
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
```

::: tip 提示
在添加索引前后使用 `EXPLAIN ANALYZE` 来确认索引确实有帮助。
:::

## 事务

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

## 核心要点

1. 使用 `SERIAL` 或 `IDENTITY` 作为自增主键。
2. 为经常用于筛选或联表的列添加索引。
3. 始终将多步数据变更包裹在事务中。
4. 在生产环境中使用连接池 — 不要为每个请求创建新连接。
