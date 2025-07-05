import { bench } from 'vitest';

import { isData } from '../dist/predicate.mjs';
import { dataSchemaZod } from '../dist/zod.mjs';
import { dataSchemaYup } from '../dist/yup.mjs';

const data = {
  name: 'Test Testerson',
  age: 100_000,
  job: {
    title: 'Software Engineer',
    company: 'webdeveric.com',
    location: {
      city: 'Nowhere',
      state: 'XXXXXX',
      country: 'XXX',
    },
  },
};

bench('isData()', () => {
  isData(data);
});

bench('dataSchemaZod.safeParse()', () => {
  dataSchemaZod.safeParse(data).success;
});

bench('dataSchemaZod.parse()', () => {
  dataSchemaZod.parse(data);
});

bench('dataSchemaYup.validate()', () => {
  dataSchemaYup.validate(data);
});
