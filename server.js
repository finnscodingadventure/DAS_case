const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const formController = require('./controllers/formController');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', formController.renderFormStep1);
  app.post('/step2', formController.renderFormStep2);
  app.post('/step3', formController.renderFormStep3);
  app.post('/summary', formController.renderFormSummary);
  app.get('/loading', formController.renderLoadingScreen);
  app.get('/result', formController.renderResultScreen);
  app.get('/result-status', formController.getResultStatus);
  app.post('/submit', formController.handleSubmit);

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
