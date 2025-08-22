import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow flex flex-col md:flex-row overflow-hidden min-h-[500px]">
        {/* Product Image */}
        <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-[550px] h-[550px] object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            <p className="text-lg font-bold text-gray-900 mb-3">{product.price}</p>

            {product.onSale && (
              <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs mb-3">
                ON SALE
              </span>
            )}

            <p className="text-sm text-gray-600 mb-2 leading-relaxed">
              This is a beautiful and high-quality product designed to bring joy and style.
              Perfect for everyday use or as a gift. Add it to your cart now!
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                />
            <button onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-red-500 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-red-600 transition">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
