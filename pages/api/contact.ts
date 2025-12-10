import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Simple placeholder endpoint for the contact form.
 * Your developer can hook this to an email service, database or CRM.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }
  const { name, email, message } = req.body || {};
  console.log('FARMSENSE contact form:', { name, email, message });
  // TODO: plug real email / DB integration here.
  return res.status(200).json({ ok: true });
}