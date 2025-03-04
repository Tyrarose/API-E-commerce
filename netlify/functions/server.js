import express from 'express';
import serverless from 'serverless-http';
import path from 'path';
import ejs from 'ejs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views'); // Relative to project root

// Routes
app.get('/api/products', async (req, res) => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        res.render('products', { products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export const handler = serverless(app);