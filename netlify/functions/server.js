import express from "express";
import serverless from "serverless-http";
import { router as indexRouter } from "../../routes/index.js";

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", indexRouter);

export const handler = serverless(app);