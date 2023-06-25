import { NextApiRequest, NextApiResponse } from 'next';

import { TryCatchMiddleware } from '@/backend/middleware/tryCatchMiddleware';
import { sendEmail } from './emailerService';

// @desc Create a new article
// @route POST /api/users
// @access Private
export async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await TryCatchMiddleware(async () => {
    const email = await sendEmail(req.body.name, req.body.email, req.body.message);
    return res.status(201).json(email);
  }, res);
}
