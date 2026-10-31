# 项目来源

直接基于 https://github.com/satnaing/astro-paper 修改。

上游提交：7cd9e9680f55fc77049c20f5ee1a028a5ca97371
许可证：MIT，原 LICENSE 保留。

保留上游组件、路由、样式、内容集合、Pagefind 搜索和 RSS。
本地修改：中文语言包与文案、个人配置、中文日期、系统字体（避免构建时下载 Google 字体）、示例文章、跨平台构建脚本及 GitHub Pages 工作流。
上游演示文章移至 upstream-examples，不会发布为个人文章。

## 首页 Adventure Time 风格

首页继续使用 AstroPaper Header、Card 和文章集合，新增仅在首页生效的 adventure.css。角色和场景 SVG 复用工作区 little-adventure-world/public 中的现有素材（rainicorn、lsp、treehouse、oak），没有改动原主页项目。内页保持原主题。

首页现已改为现成的原作剧照与 Jake 台词。旧版网站 SVG 不再用于首页。图片和台词来源见 public/adventure/SOURCES.md，第三方图片不包含在主题 MIT 授权内。

现有首页收藏扩充为 24 张原作画面和 24 句短对白，继续由 src/data/adventure.json 维护；缩略图保持隐藏。
