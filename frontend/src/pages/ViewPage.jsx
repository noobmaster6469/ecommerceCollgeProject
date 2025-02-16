import React from "react";
import { useLocation } from "react-router-dom";

const ViewPage = () => {
  const location = useLocation();
  const { title, desc, image, price } = location.state || {};
  return (
    <div className="hero bg-base-200 min-h-screen pt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{desc}</p>
          <p className="py-6">Price: {price}</p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Buy</button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
