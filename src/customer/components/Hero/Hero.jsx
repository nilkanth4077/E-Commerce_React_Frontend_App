import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import HeroImg from "../../../assets/images/Hero.png"
import Bagpng from "../../../assets/images/Bags.png"

export default function Hero() {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">

          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
              <h1 className="text-4xl md:text-6xl font-bold leading-relaxed md:leading-relaxed font-averia whitespace-nowrap">
                Trendy Fashion <br />
                <span className="text-secondary">For Everyone!</span>
              </h1>
              <p className="text-2xl tracking-wide">Step Up Your Style Game Today</p>
              <p className="text-gray-400 text-justify">
                Discover the latest trends in clothing and footwear. Upgrade your wardrobe with stylish outfits and comfortable shoes. Shop now and enjoy **20% off** on your first order!
              </p>

              {/* Button Section */}
              <div className="flex justify-center md:justify-start">
                <button className="primary-btn flex items-center gap-2">
                  <span>
                    <IoBagHandleOutline />
                  </span>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className="flex justify-center items-center">
            <img src={HeroImg} alt="" className="drop-shadow" />
          </div>

          {/* Floating Bags */}
          <div className="absolute top-14 md:top-14 right-[650px] blur-[1px] opacity-70 rotate-[-20deg]">
            <img src={Bagpng} alt="" className="w-full md:max-w-[300px]" />
          </div>
        </div>
      </section>
    </>
  );
}