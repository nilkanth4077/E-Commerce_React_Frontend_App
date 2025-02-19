import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const OrderDetails = () => {
  return (
    <>
      <Navigation />
      <div className="px-4 sm:px-6 lg:px-20">
        {/* Delivery Address Section */}
        <div>
          <h1 className="font-bold text-lg sm:text-xl py-6">Delivery Address</h1>
          <AddressCard />
        </div>

        {/* Order Tracker */}
        <div className="py-14 sm:py-20">
          <OrderTracker activeStep={3} />
        </div>

        {/* Order Items */}
        <Grid container spacing={3}>
          {[1, 1, 1, 1].map((_, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={6}
              className="shadow-lg rounded-md p-5"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-4">
                {/* Product Image */}
                <img
                  src="/img/k1.png"
                  alt="Product"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                />

                {/* Product Details */}
                <div className="mt-3 sm:mt-0 space-y-2 w-full">
                  <p className="font-semibold text-center sm:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="text-gray-500 text-sm text-center sm:text-left">
                    <span className="mr-2">Color: Pink</span> | <span>Size: M</span>
                  </p>
                  <p className="text-center sm:text-left">Seller: Monica Geller</p>
                </div>
              </div>

              {/* Rate & Review Section */}
              <Box
                className="mt-4 flex justify-center sm:justify-end items-center text-deepPurple-500"
              >
                <StarBorderIcon sx={{ fontSize: "2rem", color: deepPurple[500] }} />
                <span className="ml-2 text-sm sm:text-base">Rate & Review Product</span>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;