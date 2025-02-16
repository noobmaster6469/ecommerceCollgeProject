import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, desc, image, price }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden">
      <Link to="/view" state={{ title, desc, image, price }}>
        <figure className="max-h-[200px] cursor-pointer">
          <img src={image} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-primary">{price}</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
