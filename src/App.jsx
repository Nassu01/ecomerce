// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/layout/header/Navbar";
import Footer from "./components/layout/footer/Footer";

import Home from "./components/layout/home/Home.jsx";
import Panier from "./pages/panier/Panier";
import Order from "./pages/panier/Order";

export default function App() {
  const cartCount = useSelector((state) => state.cart?.totalQuantity ?? 0);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Panier />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}
