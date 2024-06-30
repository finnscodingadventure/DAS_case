// pages/api/submit.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const makeWebhookURL = 'https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc'; // Replace with your Make.com webhook URL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(makeWebhookURL, req.body, {
        headers: { 'Content-Type': 'application/json' }
      });
      const aiDecision = {
        decision: response.data.decision,
        explanation: response.data.explanation
      };
      // Store aiDecision in session or database
      res.status(200).json({ message: 'Data submitted', aiDecision });
    } catch (error) {
      console.error('Error submitting form data:', error);
      res.status(500).json({ error: 'Error submitting form data' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
