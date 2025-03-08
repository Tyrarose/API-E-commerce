import express from "express";
import { router as indexRouter } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;


// Set EJS as templating engine
app.set("view engine", "ejs");

// Static files
// app.use(express.static("public"));
app.use(express.static("public", { extensions: ["js"] }));


// Routes
app.use("/", indexRouter);

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
