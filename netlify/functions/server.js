import express from 'express';
import serverless from 'serverless-http';

const app = express();
app.use(express.json());

// Convert your existing routes to API endpoints
app.get('/api/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const handler = serverless(app);