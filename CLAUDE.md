# 学习博客

基于 VitePress 的个人学习笔记博客，部署在 GitHub Pages。

- **线上地址**: https://miyuuuA.github.io/learning-blog/
- **技术栈**: VitePress + GitHub Actions + GitHub Pages

## 本地开发

```bash
npm run dev      # 启动开发服务器 http://localhost:5173/learning-blog/
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```

## 新增笔记

### 1. 创建 Markdown 文件

在 `docs/` 对应子目录下新建 `.md` 文件：

```
docs/frontend/react/你的文章.md       # React 相关
docs/frontend/typescript/你的文章.md  # TypeScript 相关
docs/backend/nodejs/你的文章.md       # Node.js 相关
docs/backend/databases/你的文章.md    # 数据库相关
docs/devops/docker/你的文章.md        # Docker 相关
docs/devops/ci-cd/你的文章.md         # CI/CD 相关
```

### 2. 填写 frontmatter

文件顶部必须包含以下 frontmatter 字段：

```yaml
---
title: 文章标题
date: 2026-06-10
tags:
  - 标签1
  - 标签2
category: frontend          # 分类：frontend / backend / devops
project: react              # 所属项目
description: 文章的简短描述，用于归档页摘要。
---
```

- `date` 用于归档页按时间排序
- `category` 和 `project` 用于归档页分组显示
- `tags` 可用于未来添加标签筛选功能

### 3. 在索引页添加链接

在对应目录的 `index.md` 文章列表中添加新条目：

```markdown
- [新文章标题](./新文件路径)
```

### 4. 提交推送

```bash
git add .
git commit -m "新增笔记：文章标题"
git push origin main
```

推送后 GitHub Actions 自动构建部署，一分钟后上线。

## 目录结构

```
docs/
├── index.md                          # 首页
├── .vitepress/
│   ├── config.ts                     # VitePress 站点配置
│   └── dist/                         # 构建输出（勿手动编辑）
├── frontend/
│   ├── index.md                      # 前端概览
│   ├── react/
│   │   ├── index.md                  # React 概览
│   │   ├── hooks-deep-dive.md
│   │   └── state-management.md
│   └── typescript/
│       ├── index.md                  # TypeScript 概览
│       └── advanced-types.md
├── backend/
│   ├── index.md                      # 后端概览
│   ├── nodejs/
│   │   ├── index.md                  # Node.js 概览
│   │   └── express-vs-fastify.md
│   └── databases/
│       ├── index.md                  # 数据库概览
│       └── postgres-basics.md
├── devops/
│   ├── index.md                      # DevOps 概览
│   ├── docker/
│   │   ├── index.md                  # Docker 概览
│   │   └── docker-compose.md
│   └── ci-cd/
│       ├── index.md                  # CI/CD 概览
│       └── github-actions-intro.md
└── archive/
    ├── index.md                      # 归档页（按年份分组）
    └── posts.data.ts                 # 归档数据加载器
```

## 部署

GitHub Actions 工作流 `.github/workflows/deploy.yml`：
- 监听 `main` 分支 push
- 构建 VitePress → 上传 artifact → 部署到 GitHub Pages
- Source 需在仓库 Settings → Pages 中设为 GitHub Actions
