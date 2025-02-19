import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const Order = () => {
  const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];

  return (
    <>
      <Navigation />
      <div className="px-4 sm:px-6 lg:px-20 my-6">
        <Grid container spacing={4}>
          {/* Filters Section */}
          <Grid item xs={12} md={3} lg={2.5}>
            <div className="h-auto shadow-lg bg-white p-5 rounded-md sticky top-5">
              <h1 className="font-bold text-lg">Filter</h1>
              <div className="space-y-4 mt-5">
                <h1 className="font-semibold text-sm sm:text-base">ORDER STATUS</h1>
                {orderStatus.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      value={option.value}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor={option.value} className="ml-2 text-sm text-gray-600">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Grid>

          {/* Orders List */}
          <Grid item xs={12} md={9} lg={9.5}>
            <div className="space-y-5">
              {[1, 1, 1, 1, 1].map((_, index) => (
                <OrderCard key={index} />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Order;