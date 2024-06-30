// pages/api/step1.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Store the form data (you can save it to a database or session)
      const { amountConflict, caseType } = req.body;
      // In a real application, you'd probably save this data to a database
  
      // For now, just send a success response
      res.status(200).json({ message: 'Form data received' });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  