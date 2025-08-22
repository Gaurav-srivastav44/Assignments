import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  const [sort, setSort] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");

  //ye function jo bhi user select karega use setSort me dalega 
  const handleSortChange = (e) => {setSort(e.target.value);};

  //pehle sort karke sortedProducts me dalega
  const sortedProducts = products.slice().sort((a, b) => {
    if (sort === "low-to-high") {
      return Number(a.price.slice(1)) - Number(b.price.slice(1));
    } else if (sort === "high-to-low") {
      return Number(b.price.slice(1)) - Number(a.price.slice(1));
    }
    return 0;
  });

  //fir sorted products me se filter karke filteredProducts me dalega
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 mb-4 bg-white shadow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Logo"
          className="w-32"
        />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-64"
        />
      </header>

      <main className="p-8 max-w-6xl mx-auto bg-white flex-grow">
        <div className="flex justify-end mb-4">
          <select
            //uppar jo const banayaa hai usme se sort yaha use hua hai
            value={sort}
            onChange={handleSortChange}
            className="border px-4 py-2 rounded"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white shadow rounded hover:scale-105 transition-transform block"
            >
              {/*ye card ka content show bhi hoga aur pure card pe kahi bhi click karenge to kaam bhi akrga*/}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 font-bold text-gray-900">{product.price}</p>
                {product.onSale && (
                  <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 | Gaurav Srivastav
      </footer>
    </div>
  );
}

export default Home;
