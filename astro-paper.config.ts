import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // GitHub Actions supplies the production URL. Set SITE_URL for other hosts.
    url: process.env.SITE_URL || "https://freakalex.github.io/",
    title: "freakalex 的博客",
    description: "技术笔记、阅读记录和生活随笔。",
    author: "freakalex",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: { perPage: 6, perIndex: 4 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  // Add your own profile URLs here, e.g. { name: "github", url: "https://github.com/yourname" }.
  socials: [{ name: "github", url: "https://github.com/freakalex", linkTitle: "freakalex 的 GitHub" }],
  shareLinks: [],
});
