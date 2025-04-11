import React, { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import { useParams } from "react-router-dom";

const DeletePage = () => {
  const { getProduct, product, deleteProduct } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  return (
    <div className="mt-16 max-w-xl mx-auto bg-base-100 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Delete Product
      </h2>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          value={product?.name || ""}
          className="input input-bordered"
          readOnly
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input
          type="text"
          value={product?.category || ""}
          className="input input-bordered"
          readOnly
        />
      </div>

      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          value={product?.description || ""}
          readOnly
        />
      </div>

      <div className="form-control mb-6">
        <label className="label">
          <span className="label-text">Image</span>
        </label>
        {product?.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg border border-base-200"
          />
        ) : (
          <span className="text-sm text-base-content/50 italic">No image</span>
        )}
      </div>

      <button
        onClick={() => deleteProduct(id)}
        className="btn btn-error w-full"
      >
        Delete Product
      </button>
    </div>
  );
};

export default DeletePage;
