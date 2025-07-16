import { number, object, string, type z } from 'zod3';

export const dataSchemaZod = object({
  name: string(),
  age: number().min(0),
  job: object({
    title: string(),
    company: string(),
    location: object({
      city: string(),
      state: string(),
      country: string(),
    }),
  }),
});

export type Data = z.infer<typeof dataSchemaZod>;
