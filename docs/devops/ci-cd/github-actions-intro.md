---
title: GitHub Actions 入门
date: 2026-06-05
tags:
  - ci-cd
  - github-actions
  - devops
  - automation
category: devops
project: ci-cd
description: GitHub Actions 入门指南 — 自动化构建、测试和部署。
---

# GitHub Actions 入门

GitHub Actions 是 GitHub 内置的 CI/CD 平台。从代码推送到部署，自动化你的工作流。

## 核心概念

- **Workflow（工作流）** — `.github/workflows/` 目录下的 YAML 文件，定义了一组作业
- **Event（事件）** — 触发工作流的条件（push、PR、定时、手动）
- **Job（作业）** — 在同一运行器上执行的一组步骤
- **Step（步骤）** — 单个 Action 或 Shell 命令
- **Runner（运行器）** — 执行作业的机器（Ubuntu、macOS、Windows）

## 你的第一个工作流

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

## 常用 Actions

| Action | 用途 |
|--------|---------|
| `actions/checkout@v4` | 克隆你的仓库 |
| `actions/setup-node@v4` | 安装 Node.js |
| `actions/upload-pages-artifact@v3` | 上传静态站点用于 Pages 部署 |
| `actions/deploy-pages@v4` | 部署到 GitHub Pages |

## 密钥

在 **Settings > Secrets and variables > Actions** 中存储敏感信息：

```yaml
- run: deploy.sh
  env:
    API_KEY: ${{ secrets.API_KEY }}
```

## 核心要点

1. 从简单开始 — 一个包含 lint 和 test 的工作流比没有强无数倍。
2. 善用 Marketplace — 不必为常见任务重复造轮子。
3. 使用 `actions/setup-node@v4` 缓存依赖（内置缓存功能）。
4. 所有密钥存储在 GitHub Secrets 中，绝不要放在工作流文件里。
