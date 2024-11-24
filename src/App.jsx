import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      {products.map((product, index)=>{
        return <ProductCard key={index} product={product} />
      })}
      {/* <ProductCard title={products.title} /> */}
    </>
  );
}

export default App;
