const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Define routes for each step
router.get('/', formController.renderFormStep1);
router.post('/step2', formController.renderFormStep2);
router.post('/step3', formController.renderFormStep3);
router.post('/summary', formController.renderFormSummary);
router.post('/submit', formController.handleSubmit);

module.exports = router;
