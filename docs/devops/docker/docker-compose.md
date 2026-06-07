---
title: Docker Compose
date: 2026-06-02
tags:
  - docker
  - compose
  - devops
  - containers
category: devops
project: docker
description: 使用 Docker Compose 运行多容器应用 — 服务、网络、数据卷。
---

# Docker Compose

Docker Compose 让你可以用一个 YAML 文件定义和运行多容器应用。

## 为什么用 Compose？

与其运行多条 `docker run` 命令：

```bash
docker run -d --name db -e POSTGRES_PASSWORD=secret postgres:16
docker run -d --name app -p 3000:3000 --link db myapp
```

不如在 `docker-compose.yml` 中定义一切：

```yaml
version: '3.8'
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

  app:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:secret@db:5432/myapp

volumes:
  pgdata:
```

然后一行命令搞定：

```bash
docker compose up -d
```

## 常用命令

| 命令 | 说明 |
|---------|------------|
| `docker compose up -d` | 以后台模式启动所有服务 |
| `docker compose down` | 停止并移除容器 |
| `docker compose ps` | 列出运行中的服务 |
| `docker compose logs -f app` | 跟踪特定服务的日志 |
| `docker compose build` | 重新构建镜像 |
| `docker compose restart app` | 重启特定服务 |

## 网络

服务会自动加入默认网络，并可以通过服务名称互相访问（例如 `db:5432`）。

## 环境变量

使用 `.env` 文件将敏感信息排除在版本控制之外：

```bash
# .env
POSTGRES_PASSWORD=mysecretpassword
```

```yaml
# docker-compose.yml
services:
  db:
    environment:
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
```

## 核心要点

1. 每个项目一个 `docker-compose.yml`。
2. 使用 `depends_on` 控制启动顺序（但需单独处理就绪检查）。
3. 使用命名数据卷存储持久化数据。
4. 将 `.env` 加入 `.gitignore` — 永远不要提交敏感信息。
