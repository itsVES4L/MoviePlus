import React, { useEffect, useState } from "react";
import { useGetData } from "../../hooks";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

//Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";

const MainSlider = ({ data }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="h-fit relative  bottom-[55px] sm:bottom-[70px]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="relative"
      >
        {data?.data?.results?.map((movie) => (
          <SwiperSlide key={movie.id} className="w-screen sm:h-[90vh] ">
            <Link to={`/details/${movie.media_type}/${movie.id}`}>
              <div
                className=" sm:max-h-[90vh]
                    overflow-hidden relative"
              >
                <img
                  className=" w-auto h-auto "
                  src={`${imageBaseUrl}${movie.backdrop_path}`}
                  alt=""
                />
                <div className=" absolute bottom-10 sm:left-10 left-5  z-30">
                  <h1 className="font-bold sm:text-3xl w-[40vw] line-clamp-1 text-[15px]">
                    {movie.title || movie.name}
                  </h1>

                  <p className="sm:w-[40vw] w-[60vw]  sm:h-[70px] mt-2 sm:text-[15px] text-[10px] sm:line-clamp-3 line-clamp-2">
                    {movie.overview}
                  </p>
                </div>
              </div>
              <div class="absolute inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
                {" "}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
