import React from "react";
import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Login from "./customer/pages/Login/Login";
import Register from "./customer/pages/Register/Register";
import { About } from "./customer/pages/About/About";
import HomePage from "./customer/pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./customer/components/Product/Product";
import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/CartItem";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/order" element={<Order />} />
            <Route path="/account/order/:orderId" element={<OrderDetails />} />
            <Route path="/admin_dashboard" element={<AdminDashboard />} />
            {/* Define other routes that you need*/}
          </Routes>
          <ToastContainer />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
