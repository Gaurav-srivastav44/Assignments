import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const formatted = res.data.map((item) => ({
          id: item.id,
          name: item.title,
          category: item.category,
          price: `$${item.price}`,
          image: item.image,
          onSale: Math.random() < 0.3,
        }));
        setProducts(formatted);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSortChange = (e) => setSort(e.target.value);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const sortedProducts = products.slice().sort((a, b) => {
    if (sort === "low-to-high") {
      return Number(a.price.slice(1)) - Number(b.price.slice(1));
    } else if (sort === "high-to-low") {
      return Number(b.price.slice(1)) - Number(a.price.slice(1));
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

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
        <Link
          to="/"
          className="ml-4 bg-[tomato] text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cart ({cart.length})
        </Link>
      </header>

      <main className="p-8 max-w-6xl mx-auto bg-white flex-grow">
        <div className="flex justify-end mb-4">
          <select
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
            <div
              key={product.id}
              className="bg-white shadow rounded hover:scale-105 transition-transform block"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="mt-2 font-bold text-gray-900">{product.price}</p>
                {product.onSale && (
                  <span className="inline-block mt-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-3 w-full bg-[tomato] text-white py-2 rounded hover:bg-red-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
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
