const axios = require('axios');

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

exports.handleSubmit = async (req, res) => {
    const data = req.body;

    try {
        // Log the data to verify what will be sent
        console.log('Data to be sent to webhook:', data);

        // Send data to the webhook
        await axios.post('https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Render the confirmation page with the data
        res.render('form_submit', { data });
    } catch (error) {
        console.error('Error sending data to webhook:', error);
        res.status(500).send('Error submitting form data.');
    }
};
