import React from "react";
import "./App.css";
import Login from "./customer/pages/Login/Login";
import Register from "./customer/pages/Register/Register";
import { About } from "./customer/pages/About/About";
import { Contact } from "./customer/pages/Contact/Contact";
import HomePage from "./customer/pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./customer/components/Products/Products";
import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <h1 className="bg-secondary text-white flex justify-center font-bold py-2">Our website is under development, but feel free to explore - some sections may be incomplete !!</h1>
      <Router>
        <div className="App">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account/order" element={<Order />} />
              <Route path="/account/order/:orderId" element={<OrderDetails />} />
              <Route path="/admin_dashboard" element={<AdminDashboard />} />
              {/* Define other routes that you need*/}
            </Routes>
            <ToastContainer />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
