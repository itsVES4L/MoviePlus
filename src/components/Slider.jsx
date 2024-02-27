import React, { useState } from "react";
import { useGetData } from "../hooks";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

//Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Slider = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const trendingMovieData = useGetData("trending", "/trending/all/day");
  console.log(trendingMovieData);
  // ${trendingMovieData.movie.media_type}/${trendingMovieData.movie.id}/video
  return (
    <div className="h-[90vh]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoplay={{ delay: 5000 }}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {trendingMovieData?.data?.results.map((movie) => (
          <SwiperSlide key={movie.id} className="w-screen h-fit ">
            <div className=" sm:h-[90vh]">
              <img
                className=" w-full h-auto "
                src={`${imageBaseUrl}${movie.backdrop_path}`}
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
        className=""
      >
        {trendingMovieData?.data?.results.map((movie) => {
          const endPoint = `${trendingMovieData.movie.media_type}/${trendingMovieData.movie.id}/video`;
          useGetData("trailer", endPoint);
          return (
            <SwiperSlide key={movie.id} className="w-screen h-fit ">
              <div className=" sm:h-[10vh] ">
                <img
                  className=" w-full h-auto "
                  src={`${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div class="absolute inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
                {" "}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
