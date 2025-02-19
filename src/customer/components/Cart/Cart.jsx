import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCartOfUser } from "../../../Api/Api";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    setLoading(true);
    getCartOfUser()
      .then((data) => {
        setCart(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
        setLoading(false);
      });
  };

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-5">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-600">Loading products...</p>
          </div>
        ) : cart && cart.cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {/* Cart Items Section */}
            <div className="md:col-span-2 space-y-4">
              {cart.cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>

            {/* Price Details Section */}
            <div className="border rounded-lg shadow-lg p-5 bg-white md:sticky top-20 h-fit">
              <p className="uppercase font-bold text-gray-600 pb-4">Price Details</p>
              <Divider />
              <div className="space-y-3 font-semibold text-gray-800 mb-5">
                <div className="flex justify-between pt-3">
                  <span>Price</span>
                  <span>₹{cart.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{cart.discount}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Divider />
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹{cart.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                variant="contained"
                onClick={handleCheckout}
                fullWidth
                sx={{
                  padding: "0.7rem",
                  backgroundColor: "#9155fd",
                  "&:hover": { backgroundColor: "#7b44db" },
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-gray-600">
            <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;