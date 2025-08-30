import React, { useState } from "react";
import CartTotal from "./CartTotal";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";

function CartList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Black Printed Coffee Mug", price: 15.0, quantity: 2, image: Img1 },
    { id: 2, name: "Printed Dark Blue Tshirt", price: 34.0, quantity: 4, image: Img2 }
  ]);

  const handleQuantityChange = (id, qty) => {
    setProducts(products.map(p => p.id === id ? { ...p, quantity: qty } : p));
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full border border-gray-200 rounded-lg overflow-hidden p-4">
        
        {/* Header Row */}
        <div className="grid grid-cols-4 bg-gray-100 font-medium text-left p-3">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Subtotal</div>
        </div>

        {/* Product Rows */}
        {products.map(product => (
          <div key={product.id} className="grid grid-cols-4 items-center border-b p-4">
            
            {/* Product cell */}
            <div className="flex items-center space-x-3">
              <span className="text-red-500 font-bold mr-2">×</span>
              <img src={product.image} alt={product.name} className="w-12 h-12" />
              <span className="text-red-600 font-medium">{product.name}</span>
            </div>

            {/* Price */}
            <div className="text-center">${product.price.toFixed(2)}</div>

            {/* Quantity */}
            <div className="text-center">
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
                className="w-12 border text-center"
              />
            </div>

            {/* Subtotal */}
            <div className="text-center">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Coupon + Update Buttons */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="border p-2 w-1/3"
          />
          <button className="bg-red-500 text-white px-4 py-2">
            APPLY COUPON
          </button>
          <button className="bg-gray-200 text-gray-600 px-4 py-2">
            UPDATE CART
          </button>
        </div>
      </div>

      {/* Cart Totals box aligned right */}
      <div className="flex justify-end">
        <div className="w-full md:w-1/3">
          <CartTotal subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default CartList;
