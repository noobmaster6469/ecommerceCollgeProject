import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useProductStore } from "../store/useProductStore";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { category } = useParams();
  const { items, getProducts } = useProductStore();
  let categoryCapitalized = "";
  if (category) {
    categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
  }

  useEffect(() => {
    getProducts(categoryCapitalized);
  }, [getProducts]);

  console.log(items);

  return (
    <>
      <div className="pt-16 mt-6 flex items-center justify-center p-4">
        <h1 className="text-3xl font-bold">
          {categoryCapitalized
            ? categoryCapitalized === "Accessories"
              ? "Accessories"
              : `${categoryCapitalized} Instrument`
            : "All Category"}
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-hidden gap-4 py-4 pt-8">
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
    </>
  );
};

export default ProductPage;
