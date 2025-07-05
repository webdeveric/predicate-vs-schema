#!/usr/bin/env node

import { build } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';

try {
  const results = await build({
    entryPoints: ['./src/predicate.ts', './src/zod.ts', './src/yup.ts'],
    outdir: './dist',
    platform: 'node',
    bundle: true,
    format: 'esm',
    target: `node${process.versions.node}`,
    minify: true,
    outExtension: {
      '.js': '.mjs',
    },
    plugins: [
      clean({
        patterns: ['./dist/*'],
      }),
    ],
  });

  const errors = [...results.warnings, ...results.errors];

  if (errors.length) {
    throw new AggregateError(errors, 'Build error and warnings');
  }
} catch (error) {
  console.error(error);

  process.exitCode ||= 1;
}
