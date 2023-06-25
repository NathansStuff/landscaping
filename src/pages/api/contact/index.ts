import { sendEmailHandler } from '@/backend/features/emailer/emailerController';
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    sendEmailHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
