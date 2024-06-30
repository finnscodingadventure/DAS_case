const axios = require('axios');
const makeWebhookURL = 'https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc'; // Replace with your Make.com webhook URL

exports.handleSubmit = async (req, res) => {
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
        res.json({ decision, explanation });
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).send('Error submitting form data.');
    }
};
