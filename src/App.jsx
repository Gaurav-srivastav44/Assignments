import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./CartComponents/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CartPage />} />
    </Routes>
  );
}

export default App;
