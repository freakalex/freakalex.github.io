---
title: Markdown 写作示例
pubDatetime: 2026-10-30T08:00:00+08:00
featured: false
draft: false
tags:
  - 写作
description: 标题、列表、链接与代码块的基本写法，正式使用时可删除。
---

这篇文章用于查看主题的正文排版。

## 文章目录

## 小标题和段落

正文直接输入即可。用空行分隔段落，用 **粗体** 标记重点。

## 列表与引用

- 一个待整理的想法
- 一段解决问题的过程
- 一条有用的参考资料

> 引用内容可以使用引用块。

## 代码块

```python
from pathlib import Path

for note in Path("notes").glob("*.md"):
    print(note.name)
```

## 链接

主题的完整说明可以查看 [AstroPaper 原项目](https://github.com/satnaing/astro-paper)。
