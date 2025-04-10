import express from "express";

const router = express.Router();

import { protectRoute } from "../middlewares/auth.middleware.js";
import { getAllProducts } from "../controllers/product.controller.js";

router.post("/getAll", protectRoute, getAllProducts);

router.post("/getString", protectRoute, (req, res) => {
  res.send("String");
});

router.post("/getPercussion", protectRoute, (req, res) => {
  res.send("Percussion");
});

router.post("/getKeyboard", protectRoute, (req, res) => {
  res.send("Keyboard");
});

router.post("/getWind", protectRoute, (req, res) => {
  res.send("Wind");
});

router.post("/getOrchestral", protectRoute, (req, res) => {
  res.send("Orchestral");
});

router.post("/getElectronic", protectRoute, (req, res) => {
  res.send("Electronic");
});

router.post("/getAccessories", protectRoute, (req, res) => {
  res.send("Accessories");
});

export default router;
