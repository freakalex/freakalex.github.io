import { z } from "astro/zod";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import data from "./adventure.json";
const text = z.string().trim().min(1);
const source = z.url().refine(url => url.startsWith("https://"), "出处必须使用 HTTPS");
const schema = z.object({
  images: z.array(z.object({id:text, src:text.regex(/^adventure\/[a-zA-Z0-9_-]+\.(jpg|jpeg|png|webp|gif)$/), title:text, alt:text, source})).min(1),
  quotes: z.array(z.object({id:text, text, character:text, episode:z.string().optional().default(""), source})).min(1),
});
export const collection = schema.parse(data);
for (const items of [collection.images, collection.quotes]) {
  if (new Set(items.map(item => item.id)).size !== items.length) throw new Error("adventure.json 中的 id 不能重复");
}
for (const image of collection.images) {
  if (!existsSync(resolve("public", image.src))) throw new Error(`图片文件不存在：public/${image.src}`);
}
