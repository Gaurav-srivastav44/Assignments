import React from "react";

function CartRow({ product, onQuantityChange }) {
  return (
    <div className="grid grid-cols-4 border-b py-3 items-center ">
      {/* Product Image + Name */}
      <div className="flex items-center space-x-3">
        <img src={product.image} alt={product.name} className="w-12 h-12" />
        <span className="text-red-600 font-medium">{product.name}</span>
      </div>

      {/* Price */}
      <div className="text-gray-700">${product.price.toFixed(2)}</div>

      {/* Quantity */}
      <div>
        <input
          type="number"
          min="1"
          value={product.quantity}
          onChange={(e) =>
            onQuantityChange(product.id, parseInt(e.target.value))
          }
          className="w-16 border text-center"
        />
      </div>

      {/* Subtotal */}
      <div className="font-semibold">
        ${(product.price * product.quantity).toFixed(2)}
      </div>
    </div>
  );
}

export default CartRow;
