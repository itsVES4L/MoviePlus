import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FetchData } from "../api/api";

// import required modules

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["trending"],
    queryFn: () => FetchData("/trending/all/day"),
  });

  return (
    <div 
    className="h-[90vh]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.results.map((movie) => (
          <SwiperSlide key={movie.id} className="w-screen h-fit ">
            <div className=" sm:h-[90vh]">
              <img
                className=" w-full h-auto "
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div class="absolute inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
              {" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="fixed"
      >
        {data?.results.map((movie) => (
          <SwiperSlide key={movie.id} className="w-screen h-fit ">
            <div className=" sm:h-[90vh]">
              <img
                className=" w-full h-auto "
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div class="absolute inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
              {" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
