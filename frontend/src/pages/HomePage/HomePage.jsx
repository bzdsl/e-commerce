import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Headers from "../../components/Header";
import ProductGrid from "./ProductGrid";

const HomePage = ({ loadCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);
  return (
    <>
      <title>Home</title>
      <Headers cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

export default HomePage;
