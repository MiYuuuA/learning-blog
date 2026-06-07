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
description: Running multi-container applications with Docker Compose — services, networks, volumes.
---

# Docker Compose

Docker Compose lets you define and run multi-container applications with a single YAML file.

## Why Compose?

Instead of running multiple `docker run` commands:

```bash
docker run -d --name db -e POSTGRES_PASSWORD=secret postgres:16
docker run -d --name app -p 3000:3000 --link db myapp
```

Define everything in `docker-compose.yml`:

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

Then a single command:

```bash
docker compose up -d
```

## Common Commands

| Command | Description |
|---------|------------|
| `docker compose up -d` | Start all services in detached mode |
| `docker compose down` | Stop and remove containers |
| `docker compose ps` | List running services |
| `docker compose logs -f app` | Follow logs for a specific service |
| `docker compose build` | Rebuild images |
| `docker compose restart app` | Restart a specific service |

## Networks

Services automatically join a default network and can reach each other by service name (e.g., `db:5432`).

## Environment Variables

Use `.env` files to keep secrets out of version control:

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

## Key Takeaways

1. One `docker-compose.yml` per project.
2. Use `depends_on` for startup order (but handle readiness checks separately).
3. Use named volumes for persistent data.
4. Add `.env` to `.gitignore` — never commit secrets.
