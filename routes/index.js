import express from "express";
import axios from "axios";

const router = express.Router();

// Home page route
router.get("/", async (req, res) => {
	try {
		const response = await axios.get("https://fakestoreapi.com/products");
		res.render("pages/index", { products: response.data });
	} catch (error) {
		console.error(error);
		res.send("Error fetching data");
	}
});

export { router };
