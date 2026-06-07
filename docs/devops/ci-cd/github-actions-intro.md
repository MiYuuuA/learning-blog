---
title: GitHub Actions Intro
date: 2026-06-05
tags:
  - ci-cd
  - github-actions
  - devops
  - automation
category: devops
project: ci-cd
description: Getting started with GitHub Actions — automate builds, tests, and deployments.
---

# GitHub Actions Intro

GitHub Actions is a CI/CD platform built into GitHub. Automate your workflow from push to deploy.

## Core Concepts

- **Workflow** — a YAML file in `.github/workflows/` that defines a set of jobs
- **Event** — a trigger that starts a workflow (push, PR, schedule, manual)
- **Job** — a set of steps that run on the same runner
- **Step** — an individual action or shell command
- **Runner** — the machine that executes the job (Ubuntu, macOS, Windows)

## Your First Workflow

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm test
```

## Common Actions

| Action | Purpose |
|--------|---------|
| `actions/checkout@v4` | Clone your repository |
| `actions/setup-node@v4` | Install Node.js |
| `actions/upload-pages-artifact@v3` | Upload static site for Pages |
| `actions/deploy-pages@v4` | Deploy to GitHub Pages |

## Secrets

Store sensitive values in **Settings > Secrets and variables > Actions**:

```yaml
- run: deploy.sh
  env:
    API_KEY: ${{ secrets.API_KEY }}
```

## Key Takeaways

1. Start simple — one workflow with lint + test is infinitely better than zero.
2. Use the marketplace — don't reinvent actions for common tasks.
3. Cache dependencies with `actions/setup-node@v4` (it has built-in caching).
4. Store all secrets in GitHub Secrets, never in workflow files.
