import React, { useState } from "react";
import CartTotal from "./CartTotal";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";

function CartList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Black Printed Coffee Mug", price: 15.0, quantity: 2, image: Img1 },
    { id: 2, name: "Printed Dark Blue Tshirt", price: 34.0, quantity: 4, image: Img2 }
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // Change quantity
  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;
    setProducts(products.map(p => p.id === id ? { ...p, quantity: qty } : p));
  };

  // Remove product
  const handleRemove = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Apply coupon (dummy logic: SAVE10 = 10% off)
  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const total = subtotal - subtotal * discount;

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
              <button 
                onClick={() => handleRemove(product.id)} 
                className="text-red-500 font-bold mr-2 hover:text-red-700"
              >
                ×
              </button>
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
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border p-2 w-1/3"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-red-500 text-white px-4 py-2"
          >
            APPLY COUPON
          </button>
          <button
            onClick={() => alert("Cart Updated")}
            className="bg-gray-200 text-gray-600 px-4 py-2"
          >
            UPDATE CART
          </button>
        </div>
      </div>

      {/* Cart Totals box aligned right */}
      <div className="flex justify-end">
        <div className="w-full md:w-1/3">
          <CartTotal subtotal={subtotal} total={total} discount={discount} />
        </div>
      </div>
    </div>
  );
}

export default CartList;
