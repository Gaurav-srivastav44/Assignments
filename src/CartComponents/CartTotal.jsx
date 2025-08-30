import React from "react";

function CartTotal({ subtotal }) {
  return (
    <div className="p-6 border rounded-lg bg-white">
      <h2 className="text-lg font-semibold mb-4">Cart totals</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold mb-4">
        <span>Total</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <button className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default CartTotal;
