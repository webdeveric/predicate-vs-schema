import { z } from 'zod3';

export const dataSchemaZod = z.object({
  name: z.string(),
  age: z.number().min(0),
  job: z.object({
    title: z.string(),
    company: z.string(),
    location: z.object({
      city: z.string(),
      state: z.string(),
      country: z.string(),
    }),
  }),
});

export type Data = z.infer<typeof dataSchemaZod>;
