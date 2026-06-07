---
title: PostgreSQL Basics
date: 2026-05-22
tags:
  - postgresql
  - database
  - sql
  - backend
category: backend
project: databases
description: Getting started with PostgreSQL — setup, common queries, indexing, and best practices.
---

# PostgreSQL Basics

PostgreSQL is a powerful, open-source relational database. Here are the fundamentals.

## Installation

```bash
# macOS
brew install postgresql@16

# Ubuntu
sudo apt install postgresql

# Start the service
brew services start postgresql@16   # macOS
sudo systemctl start postgresql     # Linux
```

## Connecting

```bash
psql -U postgres
```

Or from Node.js:

```ts
import pg from 'pg'
const pool = new pg.Pool({ database: 'myapp' })
```

## Common Operations

### Create a table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Query with filters

```sql
SELECT * FROM users
WHERE created_at > '2026-01-01'
ORDER BY created_at DESC
LIMIT 10;
```

### Join

```sql
SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;
```

## Indexing

Indexes speed up queries at the cost of write performance.

```sql
-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);
```

::: tip Tip
Use `EXPLAIN ANALYZE` before and after adding an index to confirm it helps.
:::

## Transactions

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100 WHERE id = 1;
  UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

## Key Takeaways

1. Use `SERIAL` or `IDENTITY` for auto-incrementing primary keys.
2. Add indexes on columns you filter or join on frequently.
3. Always wrap multi-step mutations in transactions.
4. Use connection pools in production — don't create a new connection per request.
