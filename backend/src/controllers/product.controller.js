import User from "../models/User.model.js";
import Product from "../models/Product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};
