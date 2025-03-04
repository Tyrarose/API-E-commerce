import express from 'express';
import serverless from 'serverless-http';
import axios from 'axios';

const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
// app.get('/api/products', async (req, res) => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const products = await response.json();
        
//         res.render('products', { products });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// export const handler = serverless(app);

async function build() {
    // Fetch all products
    const products = await axios.get('https://fakestoreapi.com/products');
    
    // Render pages
    const html = await ejs.renderFile('views/index.ejs', {
      products: products.data
    });
    
    // Write to public folder
    fs.writeFileSync('public/index.html', html);
  }
  
  build();