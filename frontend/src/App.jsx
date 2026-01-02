import { Routes, Route } from "react-router";
import axios from "axios";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Tracking from "./pages/Tracking/Tracking";
import { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };
    fetchAppData();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
