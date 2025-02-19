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
      <div className="p-5 shadow-lg border rounded-md mx-4 sm:mx-8 lg:mx-20 xl:mx-32 my-5">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image Section */}
          <div className="w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] md:w-[10rem] md:h-[10rem]">
            <img src="/img/k1.png" alt="Product" className="w-full h-full object-fill rounded-md" />
          </div>

          {/* Product Info */}
          <div className="mt-4 md:mt-0 md:ml-6 flex-1 space-y-2 text-center md:text-left">
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </p>
            <p className="opacity-70 text-sm sm:text-base">Size: L, White</p>
            <p className="opacity-70 text-sm sm:text-base">Seller: Rachel Green</p>

            {/* Pricing Section */}
            <div className="flex justify-center md:justify-start items-center space-x-4 mt-4">
              <p className="text-lg font-semibold">₹499</p>
              <p className="opacity-50 line-through text-sm sm:text-base">₹1499</p>
              <p className="text-green-600 font-semibold text-sm sm:text-base">66% off</p>
            </div>
          </div>
        </div>

        {/* Quantity & Remove Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon className="text-primary" />
            </IconButton>
            <span className="py-1 px-5 border rounded-sm text-lg">3</span>
            <IconButton>
              <AddCircleOutlineIcon className="text-primary" />
            </IconButton>
          </div>

          <Button sx={{ color: "#de2c4d", marginTop: "1rem" }}>Remove</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartItem;