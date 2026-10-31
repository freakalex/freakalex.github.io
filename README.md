# freakalex 的个人博客

网站地址：https://freakalex.github.io/

仓库：https://github.com/freakalex/freakalex.github.io

直接在 [AstroPaper](https://github.com/satnaing/astro-paper) 原项目上修改，保留原主题排版和功能。原 MIT 许可证在 LICENSE，上游说明在 README.upstream.md，来源和修改范围在 UPSTREAM.md。

## 开始使用

需要 Node 24。运行 `npm ci`，再运行 `npm run dev`。
正式构建：`npm run build`；检查构建结果：`npm run preview`。搜索依赖正式构建生成的 Pagefind 索引。

## 修改个人信息

编辑 astro-paper.config.ts 中的 title、author、description 和 socials。首页介绍在 src/pages/index.astro，关于页在 src/content/pages/about.md。当前已配置为 freakalex，你可以继续修改介绍与联系方式。

## 写文章

在 src/content/posts 新建 .md 文件：

```markdown
---
title: 文章标题
pubDatetime: 2026-10-31T08:00:00+08:00
description: 文章摘要
tags: [随笔]
featured: false
draft: false
---

正文从这里开始。
```

featured 控制首页置顶，draft 控制草稿。文章目录使用 `## 文章目录`，构建时根据后续标题生成。当前两篇文章都是示例，可以直接改写或删除。上游演示内容保存在 upstream-examples，不参与发布。

## 发布到 GitHub Pages

1. 创建你自己的公开 GitHub 仓库。
2. 将本目录文件提交到你自己的仓库（上游 remote 已命名为 upstream；将 origin 设置为你自己的仓库）。
3. 仓库 Settings → Pages → Source 选择 **GitHub Actions**。
4. 推送 main 分支，deploy.yml 自动安装、构建、部署。

工作流自动读取 Pages 的域名和仓库子路径。自定义部署时设置 SITE_URL 和 BASE_PATH；本地默认使用 https://freakalex.github.io/ 作为元数据网址。

例如仓库子路径检查：设置 SITE_URL=https://用户名.github.io 和 BASE_PATH=/blog 后运行 npm run build。

## 与原主题的差异

中文界面与日期；去掉上游作者的个人链接；使用系统字体以避免构建时下载字体；保留原主题组件和配色；增加 GitHub Pages 工作流和 Windows 兼容构建脚本；关闭需要外部字体的动态分享图片，使用原主题默认图片。

这是独立于旧版 personal-blog 的新目录，旧版文件未修改。main 分支更新后由 GitHub Actions 自动发布。

## 首页主题

首页使用现成 Adventure Time 原作剧照和 Jake 台词，不再使用 little-adventure-world 的素材。外观在 src/styles/adventure.css，结构在 src/pages/index.astro。原作素材来源记录在 public/adventure/SOURCES.md，网页同时提供出处链接。第三方图片不包含在主题 MIT 授权内。

## 更新首页图片与台词

统一编辑 `src/data/adventure.json`，不需要改页面组件。内容按数组顺序显示，第一项是默认展示项。

### 新增图片

1. 将图片放入 `public/adventure/`，建议 16:9，文件名用英文、数字和短横线。
2. 在 images 数组末尾添加一个对象（注意对象之间的逗号）：

```json
{
  "id": "new-scene",
  "src": "adventure/new-scene.jpg",
  "title": "图片名称",
  "alt": "给无法查看图片的读者的画面描述",
  "source": "https://图片出处页面"
}
```

### 新增台词

在 quotes 数组添加：

```json
{
  "id": "new-quote",
  "text": "台词原文",
  "character": "角色名",
  "episode": "集名（不知道时留空字符串）",
  "source": "https://台词出处页面"
}
```

图片和台词的 id 各自不能重复。保留至少一张图和一句台词。支持 jpg、jpeg、png、webp、gif 文件。构建会检查字段格式、HTTPS 出处链接、图片路径和文件是否存在。

### 发布更新

本地运行 `npm run build` 检查，再提交到自己的 GitHub main 分支，已有 Pages 工作流会自动更新。也可以直接在 GitHub 上传图片，再通过文件编辑按钮修改 JSON 后提交。

首页无需数据库或管理后台；浏览者的切换操作只影响当前页面，不会改动配置文件。新增与删减条目会自动调整计数及切换范围。首页不显示缩略图预览。随机切换在条目多于一个时不会立即重复当前项。

当前收藏为 24 张原作图片、24 句台词。图片预览缩略图已移除，保留左右切换、键盘方向键、触摸滑动、随机组合、换句台词及复制。
