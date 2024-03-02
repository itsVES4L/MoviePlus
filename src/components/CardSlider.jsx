import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CardSlider = ({ movies }) => {
  const [slidesPerView, setSlidesPerView] = useState(7);

  // Update slidesPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(3); // Set slidesPerView to 3 for mobile
      } else {
        setSlidesPerView(7); // Set slidesPerView back to 5 for larger screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="w-screen h-fit">
      <Swiper
        slidesPerView={slidesPerView}
       
        loop={true}
        spaceBetween={-1}
        draggable={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="w-[80vw] overflow-hidden"
      >
        {movies?.data?.results?.slice(0, 10).map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <Card movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
