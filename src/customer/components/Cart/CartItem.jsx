import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const CartItem = () => {
  return (
    <>
      <Navigation />
      <div className="p-5 shadow-lg border rounded-md">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img src="/img/k1.png" alt="" className="w-[10rem] h-[10rem]" />
          </div>
          <div className="ml-5 space-y-1 mt-4">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
            <p className="opacity-70">Size: L, White</p>
            <p className="opacity-70 mt-2">Seller: Rachel Green</p>
            <div className="flex space-x-5 items-center text-grey-900 mt-6">
              <p className="font-semibold">₹499</p>
              <p className="opacity-50 line-through">₹1499</p>
              <p className="font-semibold text-green-600">66% off</p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon className="text-primary" />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton>
              <AddCircleOutlineIcon className="text-primary" />
            </IconButton>
          </div>
          <div>
            <Button sx={{ color: "#de2c4d" }}>Remove</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartItem;
