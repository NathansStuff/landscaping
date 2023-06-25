import { NextApiResponse } from 'next';
import {CustomError} from '@/app/exceptions';

// USELESS
export async function TryCatchMiddleware<T>(asyncFunction: () => Promise<T>, res: NextApiResponse): Promise<void> {
  try {
    await asyncFunction();
  } catch (error: unknown) {
    if (error instanceof CustomError) {
      res.status(error.status ?? 400).json({ status: error.status, error: error.message });
    } else {
      console.log('Unexpected Error: ', error);
      res.status(400).json({ error: `Unexpected Error: ${error}` });
    }
  }
}
