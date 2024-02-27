import React, { useEffect, useState } from "react";
import { useGetData } from "../hooks";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs , Autoplay } from "swiper/modules";

//Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Slider = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const trendingMovieData = useGetData("trending", "/trending/all/day");
 
  return (
    <div className="h-[90vh] relative">
      <Swiper

        loop={true}
         autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs,Autoplay]}
        className="mySwiper2"
      >
        {trendingMovieData?.data?.results.map((movie) => (
          <SwiperSlide key={movie.id} className="w-screen h-fit ">
            <div className=" sm:h-[90vh] relative">
              <img
                className=" w-full h-auto "
                src={`${imageBaseUrl}${movie.backdrop_path}`}
                alt=""
              />
              <div className="absolute bottom-5 left-10  z-30">
                <h1 className="font-bold text-3xl">{ movie.media_type === 'movie' ? movie.title : movie.name}</h1>
                <br />
                <p className="w-[40vw] h-[96px] line-clamp-4">{movie.overview}</p>
              </div>
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
