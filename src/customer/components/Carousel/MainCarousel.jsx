import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import MainCarouselData from "../../../Data/MainCarouselData";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 1 },
};

const items = MainCarouselData.map((item) => (
  <img
    className="cursor-pointer"
    width="100%"
    style={{ height: "850px" }}
    src={item.image}
    alt=""
  />
));

const MainCarousel = () => (
  <>
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
      />
    </div>
  </>
);

export default MainCarousel;
