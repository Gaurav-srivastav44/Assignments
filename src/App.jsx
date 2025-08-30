import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import Forgot from "./Forgot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}

export default App;
