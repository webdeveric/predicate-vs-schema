import { isString } from '@webdeveric/utils/predicate/isString';
import { shape } from '@webdeveric/utils/predicate/factory/shape';
import { isPositiveFiniteNumber } from '@webdeveric/utils/predicate/isPositiveFiniteNumber';
import type { InferPredicateReturnType } from '@webdeveric/utils/types/functions';

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
