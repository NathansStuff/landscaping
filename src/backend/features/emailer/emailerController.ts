import { TryCatchMiddleware } from '@/backend/middleware/tryCatchMiddleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from './emailerService';

export async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await TryCatchMiddleware(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    console.log('req.body', req.body);
    const { name, email, message, mobile } = req.body;
    console.log('name, email, message, mobile', name, email, message, mobile);
    const emailService = await sendEmail(name, email, message, mobile);
    return res.status(201).json(emailService);
  }, res);
}
