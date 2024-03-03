import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";
import { A11y, Navigation, Pagination } from "swiper/modules";
import {
  ArrowForwardIosRounded as ArrowNext,
  ArrowBackIosRounded as ArrowPrev,
} from "@mui/icons-material";
const CardSlider = ({ movies, name }) => {
  return (
    <div className="w-screen h-fit">
      <Swiper
        navigation={{
          nextEl: ".nxt-btn",
          prevEl: ".prv-btn",
        }}
        pagination={{
          dynamicBullets: true,
          // clickable: true,
          // dynamicMainBullets:true
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={3}
        loop={true}
        spaceBetween={0}
        draggable={true}
        modules={[Pagination, Navigation]}
        className=" flex justify-center w-[80vw] overflow-hidden pb-0 pt-10"
      >
        <div className=" flex justify-between items-center w-[95%] absolute    rounded-2xl z-40 top-4 sm:top-0">
          <p className="font-bold sm:text-xl">{name}</p>
          {/* Navigation buttons */}
          <div className=" flex gap-5  bg-[#141B1F] p-1  rounded-2xl z-40 ">
            <button className="prv-btn hover:bg-green w-7 h-7 sm:h-9 sm:w-9 p-0 sm:p-2 flex justify-center items-center rounded-full text-center  ">
              {" "}
              <ArrowPrev fontSize="small" />{" "}
            </button>
            <button className="nxt-btn  hover:bg-green w-7 h-7 sm:h-9 sm:w-9 p-0 sm:p-2 flex justify-center items-center rounded-full text-center  ">
              {" "}
              <ArrowNext fontSize="small" />{" "}
            </button>
          </div>
        </div>
        {/* Slides */}
        {movies?.data?.results?.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
