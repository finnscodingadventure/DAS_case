const axios = require('axios');

exports.renderFormStep1 = (req, res) => {
    // Render the first step without any data
    res.render('form_step1');
};

exports.renderFormStep2 = (req, res) => {
    // Capture data from Step 1
    const step1Data = req.body;
    // Pass data from Step 1 to Step 2 view
    res.render('form_step2', { data: step1Data });
};

exports.renderFormStep3 = (req, res) => {
    // Combine data from Step 1 and Step 2
    const allData = {
        ...req.body // This will include data from Step 1 and Step 2
    };
    // Pass combined data to Step 3 view
    res.render('form_step3', { data: allData });
};

exports.renderFormSummary = (req, res) => {
    // Combine data from Steps 1, 2, and 3
    const allData = {
        ...req.body // This will include data from Steps 1, 2, and 3
    };
    // Pass combined data to Summary view
    res.render('form_summary', { data: allData });
};

exports.handleSubmit = async (req, res) => {
    // Combine all the data from all steps
    const allData = {
        ...req.body // This will include all the data gathered so far
    };

    try {
        // Log data for debugging
        console.log('Data to be sent to webhook:', allData);

        // Send data to the webhook
        await axios.post('https://hook.eu2.make.com/humritfhdt7gbqop56frbiye9vrzcojc', allData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Render the confirmation page with the accumulated data
        res.render('form_submit', { data: allData });
    } catch (error) {
        console.error('Error sending data to webhook:', error);
        res.status(500).send('Error submitting form data.');
    }
};
