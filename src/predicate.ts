import { isPositiveFiniteNumber, isString, shape, type InferPredicateReturnType } from '@webdeveric/utils';

export const isData = shape({
  name: isString,
  age: isPositiveFiniteNumber,
  job: shape({
    title: isString,
    company: isString,
    location: shape({
      city: isString,
      state: isString,
      country: isString,
    }),
  }),
});

export type Data = InferPredicateReturnType<typeof isData>;
