import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    // ratings: { type: Number, default: 0 },
    // reviews: [
    //   {
    //     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //     comment: String,
    //     rating: Number,
    //   },
    // ],
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
