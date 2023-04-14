import { createClient } from '@sanity/client';

import {
  apiVersion,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  SANITY_API_TOKEN,
  useCdn,
} from '@/utils/constants';

export const config = {
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: apiVersion,
  useCdn: useCdn,
  token: SANITY_API_TOKEN,
};

export const sanityClient = createClient(config);
