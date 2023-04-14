import { ApiResponse } from '@/types/ApiResponse';
import { sanityClient } from '../sanityClient';

export async function getSanityRequest<T>(query: string, params: Record<string, any> = {}): Promise<ApiResponse<T>> {
  try {
    const response = await sanityClient.fetch<T>(query, params);
    return {
      data: response,
      status: 200,
      statusText: 'OK',
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
