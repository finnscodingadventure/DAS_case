// pages/api/step2.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amountConflict, caseType, caseDescription, conflictStart, insuredBefore, deadline } = req.body;
    // Save data to session or database
    res.status(200).json({ message: 'Data received' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
