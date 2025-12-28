import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string().optional(),
    domain: z.string(), // e.g. "Fintech · Embedded Banking"
    blurb: z.string(),
    impact: z.array(z.string()).default([]), // ["75M+ DAU", "99.1% crash-free"]
    highlights: z.array(z.string()).default([]), // 3–5 bullets
    tech: z.array(z.string()).default([]),
    artifacts: z.array(z.object({
      label: z.string(),
      url: z.string(),
      kind: z.enum(["app", "video", "link"]).default("link"),
    })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    logo: z.string().optional(), // "/logos/constantinople.svg"
  }),
});

export const collections = { work };
