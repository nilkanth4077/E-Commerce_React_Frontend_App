import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem] w-full object-cover object-left-top">
        <img src={product.imageUrl} alt="" />
      </div>

      <div className="textPart bg-white p-3 mt-8">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};
