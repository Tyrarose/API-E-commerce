import express from 'express';
import { router } from '../../routes/index.js';

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Routes
app.use('/', router);

// Serverless handler
export const handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const serverless = app(event, context);
    serverless
      .then(response => {
        resolve({
          statusCode: 200,
          body: JSON.stringify(response)
        });
      })
      .catch(error => {
        resolve({
          statusCode: 500,
          body: JSON.stringify({ error: error.message })
        });
      });
  });
};