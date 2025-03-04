import express from 'express';
import serverless from 'serverless-http';
import { router } from '../../routes/index.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Static files
app.use(express.static('public'));

// Routes
app.use('/', router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Create handler with specific serverless configuration
const handler = serverless(app, {
  binary: true,
  request: {
    rawBody: true
  }
});

// Export wrapped handler
export { handler };