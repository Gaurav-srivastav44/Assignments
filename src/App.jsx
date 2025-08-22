import React, { useState } from "react";
import products from "./data/products";

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));

      if (sort === "lowToHigh") return priceA - priceB;
      if (sort === "highToLow") return priceB - priceA;
      return 0;
    });

  return (
    <div className="bg-gray-100 flex flex-col">
      <div className="flex mb-6 px-32 bg-white p-3 shadow-md justify-between items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-32"
        />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
      </div>

      <div className="px-8 bg-white pt-10 max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <select
            value={sort}
            onChange={handleSortChange}
            className="border px-4 py-2 rounded"
          >
            <option value="default">Default sorting</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow relative hover:scale-105 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>
                <div className="text-yellow-400 text-sm mt-1">☆☆☆☆☆</div>
                <p className="mt-2 text-gray-800 font-bold">{product.price}</p>
              </div>
              {product.onSale && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-10 space-x-2 mb-32">
          <button className="px-4 py-2 bg-red-500 text-white rounded border border-red-500">1</button>
          <button className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-100">2</button>
          <button className="px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-100">→</button>
        </div>
      </div>

      <footer className="bg-gray-700 text-white text-sm py-3 px-6 mt-10">
        <div className="flex justify-between">
          <span>Copyright © 2025 | Gaurav Srivastav</span>
          <span>Powered By Gaurav Srivastav</span>
        </div>
      </footer>
    </div>
  );
}
