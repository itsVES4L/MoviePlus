import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../Cards/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import PersonCard from "../Cards/PersonCard";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";

import {
  ArrowForwardIosRounded as ArrowNext,
  ArrowBackIosRounded as ArrowPrev,
} from "@mui/icons-material";

const CardSlider = ({ data, name, dataType }) => {
  return (
    <div className="w-screen h-fit">
      <Swiper
        navigation={{
          nextEl: ".nxt-btn",
          prevEl: ".prv-btn",
        }}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={dataType === "person" ? 3 : 2}
        // loop={true}
        spaceBetween={0}
        draggable={true}
        modules={[Pagination, Navigation, FreeMode]}
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
        {data?.data?.results?.map((item) => {
          if (dataType === "movie") {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard movie={item} dataType={dataType} />
              </SwiperSlide>
            );
          }
          if (dataType === "tv") {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard movie={item} dataType={dataType} />
              </SwiperSlide>
            );
          }
          if (dataType === "person") {
            return (
              <SwiperSlide key={item.id}>
                <PersonCard person={item} dataType={dataType} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
