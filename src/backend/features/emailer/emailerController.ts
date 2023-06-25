import { NextApiRequest, NextApiResponse } from 'next';

import { TryCatchMiddleware } from '@/backend/middleware/tryCatchMiddleware';
import { sendEmail } from './emailerService';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await TryCatchMiddleware(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Add a short delay (e.g., 100ms) to allow the request body to fully process
    const email = await sendEmail(req.body.name, req.body.email, req.body.message, req.body.mobile);
    return res.status(201).json(email);
  }, res);
}
