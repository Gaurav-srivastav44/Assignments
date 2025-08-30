import React from "react";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  return (
    <>
    <button
        onClick={() => navigate("/home")}
        className="bg-red-500 text-white px-4 py-2 rounded w-fit"
      >
        ← Back
      </button>
    <div className="p-6 bg-gray-200 min-h-screen flex justify-center">
      <div className="w-full max-w-6xl bg-white px-8 py-4">
        <CartList />
      </div>
    </div>
    </>
  );
}

export default CartPage;
