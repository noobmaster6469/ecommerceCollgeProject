import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
const router = express.Router();
import { protectRoute } from "../middlewares/auth.middleware.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/check", protectRoute, checkAuth);

export default router;
