import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore.js";
import { Pencil, Trash2 } from "lucide-react";

const AdminPage = () => {
  const { getProducts, items } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="min-h-screen pt-16 px-4">
      <div className="mt-4 flex items-center justify-between pb-4">
        <h1 className="text-2xl font-bold mb-6 flex items-center justify-center">
          Admin Product Panel
        </h1>
        <Link to="/add" className="btn btn-primary">
          Add product
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items?.map((item, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl p-4 border flex flex-col gap-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <div className="text-sm">
              <span className="font-medium">Price:</span> ${item.price}
            </div>
            <div className="text-sm">
              <span className="font-medium">Stock:</span> {item.stock}
            </div>
            <div className="flex gap-2 mt-4">
              <Link
                to={`/edit/${item._id}`}
                className="btn btn-sm btn-primary w-1/2 flex items-center justify-center gap-2"
              >
                <Pencil size={16} />
                Edit
              </Link>
              <Link
                to={`/delete/${item._id}`}
                className="btn btn-sm btn-error w-1/2 flex items-center justify-center gap-2"
              >
                <Trash2 size={16} />
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
