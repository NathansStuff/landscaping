import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { config } from '../sanityClient/sanityClient';

export const getImageFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source).url() ?? '';
