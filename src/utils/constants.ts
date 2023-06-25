import assert from 'assert';

assert.ok(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'NEXT_PUBLIC_SANITY_PROJECT_ID is not defined');
export const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

assert.ok(process.env.NEXT_PUBLIC_SANITY_DATASET, 'NEXT_PUBLIC_SANITY_DATASET is not defined');
export const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const apiVersion = '2021-04-20';

export const useCdn = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

// assert.ok(process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 'NEXT_PUBLIC_SANITY_API_TOKEN is not defined');
export const SANITY_API_TOKEN = process.env.SANITY_API_TOKEN;

export const NEXT_PUBLIC_ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT ?? 'development';
