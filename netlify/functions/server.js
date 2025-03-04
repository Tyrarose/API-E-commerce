import express from 'express';
import serverless from 'serverless-http';
const axios = require('axios').default; // Changed to CommonJS import

const app = express();

app.get('/.netlify/functions/server', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export const handler = serverless(app);