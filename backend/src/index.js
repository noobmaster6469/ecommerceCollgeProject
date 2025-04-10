import express from "express";
import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/products.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
