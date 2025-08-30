import React from "react";
import CartList from "./CartList";

function CartPage() {
  return (
    <div className="p-6 bg-gray-200 min-h-screen flex justify-center">
      <div className="w-full max-w-6xl bg-white px-8 py-4">
        <CartList />
      </div>
    </div>
  );
}

export default CartPage;
