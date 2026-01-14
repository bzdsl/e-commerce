import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Tracking from "./pages/Tracking/Tracking";
import Error from "./pages/Error";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} loadCart={loadCart} />}
      />
      <Route
        path="/orders"
        element={<Orders cart={cart} loadCart={loadCart} />}
      />
      <Route path="/tracking/:orderId/:productId" element={<Tracking />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
