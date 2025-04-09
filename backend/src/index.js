import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
