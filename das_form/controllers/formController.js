const axios = require('axios');
const makeWebhookURL = 'https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc'; // Replace with your Make.com webhook URL

let aiDecision = null;

exports.renderFormStep1 = (req, res) => {
    res.render('form_step1');
};

exports.renderFormStep2 = (req, res) => {
    const data = req.body;
    res.render('form_step2', { data });
};

exports.renderFormStep3 = (req, res) => {
    const data = req.body;
    res.render('form_step3', { data });
};

exports.renderFormSummary = (req, res) => {
    const data = req.body;
    res.render('form_summary', { data });
};

exports.renderLoadingScreen = (req, res) => {
    res.render('loading');
};

exports.getResultStatus = (req, res) => {
    if (aiDecision) {
        res.json({ status: 'ready' });
    } else {
        res.json({ status: 'processing' });
    }
}

exports.renderResultScreen = (req, res) => {
    res.render('result', { decision: aiDecision.decision, explanation: aiDecision.explanation });
};

exports.handleSubmit = async (req, res) => {
    const data = req.body;

    // Render loading screen
    res.render('loading');

    try {
        // Send data to Make.com webhook
        const response = await axios.post(makeWebhookURL, data, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Extract decision and explanation from Make.com response
        aiDecision = {
            decision: response.data.decision,
            explanation: response.data.explanation
        };

        // Redirect to result page with decision and explanation
        res.redirect('/result');
    } catch (error) {
        console.error('Error submitting form data:', error);
        res.status(500).send('Error submitting form data.');
    }
};
