import axios from 'axios';

const makeWebhookURL = 'https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc'; // Replace with your Make.com webhook URL

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        try {
            // Send data to Make.com webhook
            const response = await axios.post(makeWebhookURL, data, {
                headers: { 'Content-Type': 'application/json' }
            });

            // Extract decision and explanation from Make.com response
            const decision = response.data.decision;
            const explanation = response.data.explanation;

            // Send response back to the client
            res.status(200).json({ decision, explanation });
        } catch (error) {
            console.error('Error submitting form data:', error);
            res.status(500).json({ error: 'Error submitting form data.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
