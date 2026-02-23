import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    heroImage: z.string(),
    tags: z.array(z.string()),
    language: z.enum(['pl', 'en']),
  }),
});

export const collections = {
  blog: blogCollection,
};
