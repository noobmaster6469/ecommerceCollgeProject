import User from "../models/User.model.js";
import Product from "../models/Product.model.js";

export const getProducts = async (req, res) => {
  const { category } = req.body;

  try {
    let products;
    if (category) {
      products = await Product.find({ category });
    } else {
      products = await Product.find({});
    }
    if (!products) {
      return res.status(400).json({ message: "Products cannot be created" });
    }
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const image = req.file?.filename;

    if (!name || !description || !price || !stock || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({
      name,
      description,
      price,
      stock,
      image,
    });

    if (product) {
      return res.status(201).json({
        message: "Product added successfully",
        data: {
          name,
          description,
          price,
          stock,
          imageUrl: `/images/${image}`, // Accessible via Express static
        },
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

export const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {}
};
