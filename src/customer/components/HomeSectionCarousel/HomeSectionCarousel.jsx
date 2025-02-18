import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
    slidesToShow: 4, // Adjusted for better spacing
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="mx-3 rounded my-11">
      <h2 className="text-3xl font-bold font-poppins text-gray-700 text-left ml-10 mb-5">
        {sectionName}
      </h2>

      <div className="relative p-4">
        {/* Buttons */}
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg z-10"
          onClick={handlePrev}
        >
          <KeyboardArrowLeftIcon className="text-white text-xl" />
        </button>

        {/* Carousel */}
        <div className="mx-10">
          <Slider ref={sliderRef} {...settings} className="gap-6">
            {data.slice(0, 8).map((item) => (
              <div key={item.id} className="px-3"> {/* Added spacing */}
                <HomeSectionCard product={item} className="shadow-md" />
              </div>
            ))}
          </Slider>
        </div>

        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg z-10"
          onClick={handleNext}
        >
          <KeyboardArrowRightIcon className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;