import express from "express";
import axios from "axios";

const router = express.Router();
const PRODUCTS_PER_PAGE = 8; // Number of products per page

// Home page route with pagination
router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const allProducts = response.data;

        const page = parseInt(req.query.page) || 1; // Get current page, default to 1
        const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
        const paginatedProducts = allProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

        res.render("pages/index", { 
            products: paginatedProducts,
            currentPage: page,
            totalPages
        });
    } catch (error) {
        console.error(error);
        res.send("Error fetching data");
    }
});

export { router };
