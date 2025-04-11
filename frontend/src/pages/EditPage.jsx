import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

const EditPage = () => {
  const { id } = useParams();
  const { getProduct, product, editProduct } = useProductStore();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    stock: "",
    price: "",
  });

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        description: product.description || "",
        stock: product.stock || "",
        price: product.price || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(id, formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 max-w-xl mx-auto bg-base-100 p-6 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Product</h2>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          className="input input-bordered"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input
          type="text"
          name="category"
          className="input input-bordered"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Stock</span>
        </label>
        <input
          type="number"
          name="stock"
          className="input input-bordered"
          value={formData.stock}
          onChange={handleChange}
          required
          min="0"
        />
      </div>

      <div className="form-control mb-6">
        <label className="label">
          <span className="label-text">Price (in $)</span>
        </label>
        <input
          type="number"
          name="price"
          className="input input-bordered"
          value={formData.price}
          onChange={handleChange}
          required
          step="0.01"
          min="0"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Update
      </button>
    </form>
  );
};

export default EditPage;
