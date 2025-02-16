import React from "react";
import Cards from "./Cards";
import { items } from "../constants";
const Products = () => {
  console.log(items);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-hidden gap-4 py-4">
      {items.map((item) => (
        <Cards
          key={item.id}
          title={item.title}
          desc={item.desc}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Products;
