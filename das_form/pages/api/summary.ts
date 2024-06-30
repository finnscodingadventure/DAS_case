// pages/api/summary.ts

import { NextApiRequest, NextApiResponse } from 'next';

let formData: FormData | null = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Send the stored form data
    res.status(200).json(formData);
  } else if (req.method === 'POST') {
    // Store form data from step 3
    formData = req.body;
    res.status(200).json({ message: 'Form data saved' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
