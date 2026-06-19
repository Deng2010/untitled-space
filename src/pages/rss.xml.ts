import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { withBase } from "../utils/paths";

export async function GET(context: { site: string }) {
  const posts = (await getCollection("blog"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "untitled-space",
    description: "A personal blog at the intersection of code, design, and retro futures.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: withBase(`/blog/${post.id}/`),
    })),
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<language>zh-CN</language>`,
  });
}
