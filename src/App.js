import React from "react";
import "./App.css";
import { Footer } from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import { About } from "./customer/pages/About/About";
import HomePage from "./customer/pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            {/* Define other routes that you need*/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
