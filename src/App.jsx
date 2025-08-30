import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./CartComponents/CartPage";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<CartPage />} />

      </Routes>
    </div>
  );
}
