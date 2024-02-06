import rss from '@astrojs/rss';
import {SITE_DESCRIPTION, SITE_TITLE} from '../consts';
import posts from '../data/posts.json'

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post,
      pubDate: post.postedAt,
      link: `/#${post.id}`,
    })),
  });
}
