
import './App.css'
import Header from './component/Header'
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Shop from "./component/Shop";
import { useState } from "react";
import Cart from "./component/Cart";

function App() {
const [cart, setCart] = useState([]);
return (
  <div>
    <Header />
     <Navbar cartCount={cart.length} />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
       <Route path="/product/:id" element={<Product cart={cart} setCart={setCart} />} />
   
    </Routes>
  </div>
);  
}

export default App
