import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative mt-5">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 to-0 sticky h-[100vh] mt-5 lg:mt-0">
            <div className="border px-5 py-9">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider></Divider>
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹499</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-₹499</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Divider></Divider>
                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600 font-bold">₹499</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{
                  padding: "2.5rem",
                  py: "0.7rem",
                  backgroundColor: "#9155fd",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
