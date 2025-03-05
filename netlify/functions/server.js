import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
const axios = require('axios').default;

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../..', 'views'));

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Root route handler
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.render('pages/index', { 
      products: response.data,
      title: 'My Shop' 
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).render('pages/error', { 
      error: 'Failed to fetch products' 
    });
  }
});

// Keep the original route as a fallback
app.get('/.netlify/functions/server', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

export const handler = serverless(app);