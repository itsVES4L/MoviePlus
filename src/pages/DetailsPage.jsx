import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks";
import { Loader } from "../components";

import { playIcon } from "../assets/icons";
import formatBudget from "../helper/formatBudget";
const DetailsPage = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  const params = useParams();
  const id = params.id;
  const type = params.type;
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
        <div className="h-fit w-screen overflow-hidden relative flex flex-col items-center">
          <div>
            <img
              className="sm:min-w-[100vw] sm:h-[90vh] w-auto h-auto"
              src={imageBaseUrl + data?.backdrop_path}
              alt=""
            />
            <div class="absolute  bottom-0 inset-0 w-full h-full z-20 bg-gradient-to-b from-transparent to-darkBlue">
              {" "}
            </div>
          </div>
          <div className="z-50 absolute bottom-0  w-[80vw]  ">
            <div className="flex flex-col">
              <h1 className="sm:text-[60px] font-[Staatliches] ">
                {data?.name || data?.title}
              </h1>
              <div className="flex gap-2">
                {data?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-[5px] text-[15px] text-center text-[#fffffffd] rounded-lg border border-[#62e262b2] bg-[#0080006e]"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full mt-8 flex gap-10">
              <div className="bg-green rounded-3xl w-[15vw] h-[20vh] flex justify-center items-center relative text-white text-3xl ">
                <img className="w-12" src={playIcon} />
              </div>
              <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl w-[15vw] font-[Staatliches]   h-[20vh] flex justify-center items-center relative text-white text-3xl ">
                <p className="text-[12px] absolute left-0 rotate-[270deg] text-[#ffffff73] font-bold font-mons">
                  RATING
                </p>
                <h1 className="text-[40px]">
                  {data?.vote_average?.toFixed(1)}
                </h1>
              </div>
              <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl w-[15vw] font-[Staatliches]   h-[20vh] flex justify-center items-center relative text-white text-3xl ">
                <p className="text-[12px] absolute left-0 rotate-[270deg] text-[#ffffff73] font-bold font-mons">
                  RELEASE
                </p>
                <h1 className="text-[30px]">
                  {data?.release_date?.slice(0, 7) ||
                    data?.first_air_date?.slice(0, 7)}
                </h1>
              </div>
              <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl w-[15vw] font-[Staatliches]   h-[20vh] flex justify-center items-center relative text-white text-3xl ">
                <p className="text-[12px] absolute left-0 rotate-[270deg] text-[#ffffff73] font-bold font-mons">
                  {data?.budget !== undefined ? "BUDGET" : "EPISODES"}
                </p>
                <h1 className="text-[40px]">
                  {data?.budget !== undefined
                    ? formatBudget(data?.budget)
                    : data.number_of_episodes}
                </h1>
              </div>
              <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl w-[15vw] font-[Staatliches]   h-[20vh] flex justify-center items-center relative text-white text-3xl ">
                <p className="text-[12px] absolute left-0 rotate-[270deg] text-[#ffffff73] font-bold font-mons">
                  LENGTH
                </p>
                <h1 className="text-[40px]">
                  {data?.runtime || data.episode_run_time[0] || "?"}min
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsPage;
