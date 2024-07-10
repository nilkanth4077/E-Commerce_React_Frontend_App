import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  src="/public/img/k1.png"
                  alt=""
                  className="w-[5rem] h-[5rem] object-cover object-top"
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                  </p>
                  <p className="space-x-5 opacity-50 font-semibold text-xs">
                    <span>Color : Pink</span>
                    <span>Size : M</span>
                  </p>
                  <p>Seller: Monica Geller</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className="px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
