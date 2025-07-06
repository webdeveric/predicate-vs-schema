import { object, string, number, type InferType } from 'yup';

export const dataSchemaYup = object({
  name: string().required(),
  age: number().min(0).required(),
  job: object({
    title: string().required(),
    company: string().required(),
    location: object({
      city: string().required(),
      state: string().required(),
      country: string().required(),
    }).required(),
  }),
});

export type Data = InferType<typeof dataSchemaYup>;
