import React, { useRef, useState, useEffect } from "react";
import MovieCard from "../Cards/MovieCard";
import MovieRowCard from "../Cards/MovieRowCard";
import PersonCard from "../Cards/PersonCard";
import VideoPlayer from "../common/VideoPlayer";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./CardSlider.css";

import {
  ArrowForwardIosRounded as ArrowNext,
  ArrowBackIosRounded as ArrowPrev,
} from "@mui/icons-material";

const CardSlider = ({ data, name, dataType, isBackdrop }) => {
  return (
    <div className="w-screen h-fit mt-2 ">
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
            slidesPerView: isBackdrop || dataType === "trailer" ? 2.2 : 3.5,
          },
          1024: {
            slidesPerView: isBackdrop || dataType === "trailer" ? 2.2 : 5,
          },
        }}
        slidesPerView={
          dataType === "person"
            ? 3
            : isBackdrop || dataType === "trailer"
            ? 1
            : 2
        }
        spaceBetween={dataType === "trailer" ? 50 : 0}
        draggable={true}
        modules={[Pagination, Navigation, FreeMode]}
        className={` flex justify-center items-center h-fit w-[80vw] overflow-hidden ${
          isBackdrop
            ? "bg-blackShade sm:pt-20 sm:pb-14 pt-10 pb-0 pl-4 rounded-xl"
            : "pb-0 pt-10 "
        } ${
          isBackdrop &&
          dataType === "trailer" &&
          "mt-10 box-border  pb-[50px] pt-[60px] pr-[20px] pl-[20px]"
        }`}
      >
        <div
          className={` flex justify-between 
          ${isBackdrop ? "sm:pt-4 ml-8 " : "pb-0 pt-0 "}
          items-center w-[95%] absolute    rounded-2xl z-40 top-4 sm:top-0`}
        >
          <p className="font-bold sm:text-xl">{name}</p>
          {/* Navigation buttons */}
          <div
            className={`flex gap-5  bg-[#141B1F] ${
              isBackdrop && dataType !== "trailer" && "hidden"
            }
            ${isBackdrop && dataType === "trailer" && "block lg:mr-5 mr-6"}
             p-1  rounded-2xl z-50 `}
          >
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
          switch (dataType) {
            case "movie": {
              return (
                <SwiperSlide key={item.id}>
                  <MovieCard
                    movie={item}
                    dataType={dataType}
                    isBackdrop={isBackdrop}
                  />
                </SwiperSlide>
              );
            }
            case "tv": {
              return (
                <SwiperSlide key={item.id}>
                  <MovieCard
                    movie={item}
                    dataType={dataType}
                    isBackdrop={isBackdrop}
                  />
                </SwiperSlide>
              );
            }
            case "person": {
              return (
                <SwiperSlide key={item.id}>
                  <PersonCard person={item} dataType={dataType} />
                </SwiperSlide>
              );
            }
            case "trailer": {
              return (
                <SwiperSlide key={item?.key}>
                  <VideoPlayer trailerKey={item?.key} />
                </SwiperSlide>
              );
            }
          }
        })}
      </Swiper>
    </div>
  );
};

export default CardSlider;
