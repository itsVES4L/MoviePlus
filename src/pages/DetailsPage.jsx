import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../hooks";
import { Breadcrumbs, Loader } from "../components";

import { playIcon } from "../assets/icons";
import formatBudget from "../helper/formatBudget";
import { ArrowBack } from "@mui/icons-material";
const DetailsPage = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  const params = useParams();
  const id = params.id;
  const type = params.type;
  const navigate = useNavigate();
  // const budget = formatBudget(data.budget);
  const { data, isFetching } = useGetData(
    "movieDetails",
    `${type}/${id}`,
    [],
    0
  );

  if (isFetching) {
    return <Loader />;
  }
  if (data) {
    return (
      <div className="bg-darkBlue w-screen h-screen absolute z-0 top-0 flex flex-col items-center ">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-6 z-50  left-6 lg:hidden  rounded-xl p-3 text-center bg-[#9c9b9b50] backdrop-blur-sm  "
        >
          <ArrowBack />
        </button>
        <div className="absolute top-8 z-50 lg:left-[-60px] left-[5px] lg:block hidden">
          <Breadcrumbs address={[type, data?.name || data?.title]} />
        </div>
        <div className="h-fit w-screen overflow-hidden relative flex flex-col items-center ">
          <div className="w-screen overflow-hidden">
            <img
              className="lg:min-w-[100vw] h-[40vh] md:h-[80vh] lg:h-[95vh] min-w-[120vw]"
              src={imageBaseUrl + data?.backdrop_path}
              alt=""
            />
            <div class="absolute  bottom-0 inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
              {" "}
            </div>
          </div>
        </div>
        <div className="z-50  absolute lg:bottom-0 bottom-[10vh] md:bottom-[-30vh]   w-[80vw]  ">
          <div className="flex flex-col ">
            <h1 className="lg:text-[60px] text-[40px] leading-[0.75] font-[Staatliches] text-center lg:text-start ">
              {data?.name || data?.title}
            </h1>
            <div className="flex justify-center lg:justify-start flex-grow ">
              <div
                className="  flex justify-center
             flex-wrap p-1 lg:w-fit w-[50vw]  gap-1 "
              >
                {data?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-[5px] text-[10px]  lg:text-[15px] text-center text-[#fffffffd] rounded-lg border border-[#62e262b2] bg-[#0080006e]"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-full mt-8 flex flex-row
             lg:gap-10 gap-5 flex-wrap lg:flex-nowrap"
          >
            <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl font-[Staatliches] md:h-[20vh] flex-grow lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh]   flex justify-center items-center relative text-white text-3xl ">
              <p className="lg:text-[12px] text-[10px] absolute lg:bottom-0  bottom-0 text-[#ffffff73] font-bold font-mons">
                RATING
              </p>
              <h1 className="lg:text-[40px] text-[30px] w-fit h-fit">
                {data?.vote_average?.toFixed(1)}
              </h1>
            </div>
            <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl  font-[Staatliches] md:h-[20vh] flex-grow lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh]  flex justify-center items-center relative text-white text-3xl ">
              <p className="lg:text-[12px] text-[10px] absolute lg:bottom-0  bottom-0 text-[#ffffff73] font-bold font-mons">
                RELEASE
              </p>
              <h1 className="lg:text-[40px] text-[30px] w-fit h-fit">
                {data?.release_date?.slice(0, 7) ||
                  data?.first_air_date?.slice(0, 7)}
              </h1>
            </div>
            <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl lg:w-[15vw] lg:h-[20vh] w-[30vw] md:h-[20vh] h-[10vh] font-[Staatliches] flex-grow   flex justify-center items-center relative text-white text-3xl ">
              <p className="lg:text-[12px] text-[10px] absolute lg:bottom-0  bottom-0 text-[#ffffff73] font-bold font-mons">
                {data?.budget !== undefined ? "BUDGET" : "EPISODES"}
              </p>
              <h1 className="lg:text-[40px] text-[30px] w-fit h-fit">
                {data?.budget !== undefined
                  ? formatBudget(data?.budget)
                  : data.number_of_episodes}
              </h1>
            </div>
            <div className="bg-[#ffffff15] backdrop-blur-[4px] flex-grow rounded-3xl  font-[Staatliches] md:h-[20vh]  lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh] flex justify-center items-center relative text-white lg:text-3xl ">
              <p className="lg:text-[12px] text-[10px] absolute lg:bottom-0  bottom-2 text-[#ffffff73] font-bold font-mons ">
                LENGTH
              </p>
              <h1 className="lg:text-[40px] text-[30px] w-fit h-fit ">
                {data?.runtime || data.episode_run_time[0] || "?"}min
              </h1>
            </div>
            <div className="bg-green rounded-3xl lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh] flex  md:h-[20vh] flex-grow justify-center items-center relative text-white text-3xl ">
              <img className="lg:w-12 w-8" src={playIcon} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsPage;
