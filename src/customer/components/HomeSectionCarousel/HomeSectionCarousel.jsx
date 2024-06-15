import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const items = data.slice(0, 8).map((item) => (
    <div key={item.id}>
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="border mx-3 rounded">
      <h2 className="text-2xl font-extrabold text-gray-800 text-left ml-5">
        {sectionName}
      </h2>
      <div className="relative p-2">
        <Slider ref={sliderRef} {...settings} className="mx-5">
          {items}
        </Slider>
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-blue-500 rounded-lg px-1 py-5"
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-blue-500 rounded-lg px-1 py-5"
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
