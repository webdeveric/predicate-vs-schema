import { bench } from 'vitest';

import { isData } from '../dist/predicate.mjs';
import { isData as isData_specific_imports } from '../dist/predicate-specific-imports.mjs';
import { dataSchemaZod as dataSchemaZod3 } from '../dist/zod3.mjs';
import { dataSchemaZod as dataSchemaZod3NamedImports } from '../dist/zod3-named-imports.mjs';
import { dataSchemaZod as dataSchemaZod4 } from '../dist/zod4.mjs';
import { dataSchemaZod as dataSchemaZod4NamedImports } from '../dist/zod4-named-imports.mjs';
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

const options = {
  // time: 1000,
  iterations: 10_000,
};

bench(
  'isData()',
  () => {
    isData(data);
  },
  options,
);

bench(
  'isData_specific_imports()',
  () => {
    isData_specific_imports(data);
  },
  options,
);

bench(
  'dataSchemaZod3.safeParse()',
  () => {
    dataSchemaZod3.safeParse(data).success;
  },
  options,
);

bench(
  'dataSchemaZod3.parse()',
  () => {
    dataSchemaZod3.parse(data);
  },
  options,
);

bench(
  'dataSchemaZod3NamedImports.safeParse()',
  () => {
    dataSchemaZod3NamedImports.safeParse(data).success;
  },
  options,
);

bench(
  'dataSchemaZod3NamedImports.parse()',
  () => {
    dataSchemaZod3NamedImports.parse(data);
  },
  options,
);

bench(
  'dataSchemaZod4.safeParse()',
  () => {
    dataSchemaZod4.safeParse(data).success;
  },
  options,
);

bench(
  'dataSchemaZod4.parse()',
  () => {
    dataSchemaZod4.parse(data);
  },
  options,
);

bench(
  'dataSchemaZod4NamedImports.safeParse()',
  () => {
    dataSchemaZod4NamedImports.safeParse(data).success;
  },
  options,
);

bench(
  'dataSchemaZod4NamedImports.parse()',
  () => {
    dataSchemaZod4NamedImports.parse(data);
  },
  options,
);

bench(
  'dataSchemaYup.validate()',
  () => {
    dataSchemaYup.validate(data);
  },
  options,
);
