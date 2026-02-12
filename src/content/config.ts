import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    wordCount: z.number().optional(),
    authorImage: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
