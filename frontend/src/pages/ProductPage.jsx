import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useProductStore } from "../store/useProductStore";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { category } = useParams();
  const { items, getAllProducts, getProducts } = useProductStore();

  useEffect(() => {
    if (!category) {
      getAllProducts();
    } else {
      getProducts(category);
    }
  }, [getAllProducts]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-hidden gap-4 py-4 pt-16">
      {items.map((item) => (
        <Cards
          key={item._id}
          title={item.name}
          desc={item.description}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductPage;
