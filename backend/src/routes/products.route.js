import express from "express";

const router = express.Router();

import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/product.controller.js";
import upload from "../config/multerconfig.js";

router.post("/get", protectRoute, getProducts);

router.post("/get/:id", getProduct);

router.delete("/delete/:id", deleteProduct);

router.put("/edit/:id", editProduct);

router.post("/add", upload.single("image"), addProduct);

export default router;
