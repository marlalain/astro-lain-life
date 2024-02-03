import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    id: z.string().default(() => crypto.randomUUID()),
    content: z.string(),
    image: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = {blog};
