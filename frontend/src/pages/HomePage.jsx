import React from "react";
import { Link } from "react-router-dom";
import all from "../assets/Images/Category/all.jpeg";
import string from "../assets/Images/Category/string.jpeg";
import orchestral from "../assets/Images/Category/orchestral.jpeg";
import percussion from "../assets/Images/Category/percussion.jpeg";
import keyboard from "../assets/Images/Category/keyboard.jpeg";
import wind from "../assets/Images/Category/wind.jpeg";
import electronic from "../assets/Images/Category/electronic.jpeg";
import accessories from "../assets/Images/Category/accessories.jpeg";

// Image mapping
const categoryImages = {
  string,
  percussion,
  keyboard,
  wind,
  orchestral,
  electronic,
  accessories,
};

const HomePage = () => {
  const categories = [
    "String Instruments",
    "Percussion Instruments",
    "Keyboard Instruments",
    "Wind Instruments",
    "Orchestral Instruments",
    "Electronic Instruments",
    "Accessories",
  ];

  // Utility to extract route-friendly category key
  const getCategoryKey = (category) =>
    category.replace(" Instruments", "").toLowerCase();

  return (
    <div className="min-h-screen pt-16 px-4 grid place-content-center">
      <h1 className="text-3xl font-bold text-center mb-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* "All Categories" Card */}
        <div className="relative group w-full h-48 overflow-hidden rounded-2xl shadow-md cursor-pointer">
          <Link to="/product" className="w-full h-full block">
            <img
              src={all} // Placeholder for all
              alt="All Categories"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-xl font-bold">
                All Categories
              </span>
            </div>
          </Link>
        </div>

        {/* Category Cards */}
        {categories.map((category, idx) => {
          const key = getCategoryKey(category);
          return (
            <div
              key={idx}
              className="relative group w-full h-48 overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <Link to={`/product/${key}`} className="w-full h-full block">
                <img
                  src={categoryImages[key]} // Will be filled in later
                  alt={category}
                  className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-xl font-bold">
                    {category}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
