import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetData } from "../hooks";
import {
  Breadcrumbs,
  CardSlider,
  DetailsBox,
  Genres,
  Loader,
  PageNavigation,
} from "../components";

import { playIcon } from "../assets/icons";
import formatBudget from "../helper/formatBudget";
import { Header } from "../layouts";

const MovieDetailsPage = () => {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const trailerRef = useRef(null);
  const executeScroll = () => trailerRef.current.scrollIntoView();
  const params = useParams();
  const media_id = params.id;
  const media_type = params.type;

  const trailers = useGetData(
    "trailers",
    `/${media_type}/${media_id}/videos`,
    {},
    0
  );

  const casts = {
    data: {
      results: useGetData(
        "movieCasts",
        `${media_type}/${media_id}/credits`,
        {},
        0
      ).data?.cast.slice(0, 40),
    },
  };
  const similar = useGetData(
    "Similar",
    `${media_type}/${media_id}/similar`,
    {},
    0
  );
  const { data, isFetching } = useGetData(
    "movieDetails",
    `${media_type}/${media_id}`,
    {},
    0
  );

  if (isFetching) {
    return <Loader />;
  }
  if (data) {
    return (
      <div className="bg-darkBlue w-screen min-h-screen scroll-auto flex flex-col items-center ">
        <PageNavigation address={[media_type, data?.name || data?.title]} />

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
        {/* Rating , Budget ,.... Boxes */}
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
                <Genres genres={data?.genres} />
              </div>
            </div>
          </div>
          <div
            className="w-full mt-8 flex flex-row
             lg:gap-10 gap-5 flex-wrap lg:flex-nowrap"
          >
            <DetailsBox
              value={data?.vote_average?.toFixed(1)}
              title={"RATING"}
            />

            <DetailsBox
              value={
                data?.release_date?.slice(0, 7) ||
                data?.first_air_date?.slice(0, 7)
              }
              title={"RELEASE"}
            />

            <DetailsBox
              value={
                data?.budget !== undefined
                  ? formatBudget(data?.budget)
                  : data?.number_of_episodes
              }
              title={data?.budget !== undefined ? "BUDGET" : "EPISODES"}
            />

            <DetailsBox
              value={`${data?.runtime || data?.episode_run_time[0] || "?"}min`}
              title={"LENGTH"}
            />

            <div
              onClick={executeScroll}
              className="bg-green rounded-3xl cursor-pointer lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh] flex  md:h-[20vh] flex-grow justify-center items-center relative text-white text-3xl "
            >
              <img className="lg:w-12 w-8 md:w-[60px]" src={playIcon} />
            </div>
          </div>
        </div>

        {/*DESCRIPTION & COMPANIES  */}
        <div className=" p-2 h-fit w-[80%] mt-[55vh] lg:mt-16  flex justify-between md:gap-8 flex-col lg:flex-row">
          <div className=" min-h-fit max-h-[30vh] w-[100%] lg:w-[70%] text-[#ffffff71] flex flex-col gap-2  ">
            <h1 className="text-sm lg:text-lg">DESCRIPTION</h1>
            <p className="text-white line-clamp-[12]  text-[12px] lg:text-sm h-fit text-justify">
              {data?.overview}
            </p>
          </div>

          <div className="flex gap-2 md:mt-4 lg:w-[30%]  flex-col h-fit w-[100%] text-[#ffffff71]">
            <h1 className="text-sm lg:text-lg">COMPANIES</h1>
            <div
              className={` grid justify-start  ${
                data.production_companies.length > 1
                  ? "grid-cols-2"
                  : "grid-cols-1"
              } justify-items-center  items-center  lg:w-[18vw] 
            w-[100%] overflow-hidden gap-2 max-h-[30vh] `}
            >
              {data?.production_companies?.slice(0, 5)?.map((company) => {
                return (
                  <img
                    key={company.logo_path}
                    src={imageBaseUrl + company.logo_path}
                    className="
                lg:h-[5vh] h-[40px] flex justify-center  lg:w-fit md:h-[8vh] p-[auto]
                "
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div ref={trailerRef} className="trailer  overflow-hidden w-fit h-fit">
          <CardSlider
            isBackdrop={true}
            name={"Trailers"}
            dataType={"trailer"}
            data={trailers}
          />
        </div>
        <div className="mt-8 ">
          {casts && (
            <CardSlider dataType={"person"} data={casts} name={"Casts"} />
          )}

          {similar?.data?.results && (
            <CardSlider dataType={media_type} data={similar} name={"Similar"} />
          )}
        </div>
      </div>
    );
  }
};

export default MovieDetailsPage;
