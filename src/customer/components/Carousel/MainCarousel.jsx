import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainCarouselData from "./MainCarouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = MainCarouselData.map((item) => (
  <img className="cursor-pointer" width="99%" src={item.image} alt="" />
));

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    autoPlay
    autoPlayInterval={2000}
    infinite
    disableButtonsControls
  />
);

export default MainCarousel;
