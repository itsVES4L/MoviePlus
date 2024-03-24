import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks";
import { CardSlider, Loader, PageNavigation } from "../components";
import StarIcon from "@mui/icons-material/StarRounded";
import DateIcon from "@mui/icons-material/InsertInvitationRounded";

const PersonDetailsPage = () => {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const params = useParams();
  const person_id = params.id;
  const { data, isLoading, isError } = useGetData(
    "personDetails",
    `person/${person_id}`
  );
  const movieCredits = {
    data: {
      results: useGetData("movieCredits", `person/${person_id}/movie_credits`)
        ?.data?.cast,
    },
    isLoading: useGetData("movieCredits", `person/${person_id}/movie_credits`)
      .isLoading,
  };
  const tvCredits = {
    data: {
      results: useGetData("tvCredits", `person/${person_id}/tv_credits`)?.data
        ?.cast,
    },
    isLoading: useGetData("tvCredits", `person/${person_id}/tv_credits`)
      .isLoading,
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <PageNavigation address={["person", data?.name]} />
      <div className="w-[100%] lg:flex flex-col items-center">

      <div className="lg:mt-20 lg:ml-10 flex flex-col  overflow-hidden  lg:flex-row gap-4 lg:w-[80%]">
        <div className="relative ">
          <img
            className="h-auto lg:w-[30vw] lg:rounded-2xl"
            src={imageBaseUrl + data?.profile_path}
            alt=""
          />
          <div class="absolute  bottom-0 inset-0 w-full h-full z-50 bg-gradient-to-b from-transparent to-darkBlue">
            {" "}
          </div>
        </div>
        <div className=" w-screen flex flex-col justify-start items-center gap-3  lg:items-start lg:mt-3">
          <div className="flex w-fit sm:w-fit sm:mr-0 sm:gap-0 gap-5 text-start">
            <p className="text-[#c4baba7a] w-[120px] sm:w-fit flex items-center">
              <DateIcon /> {data?.birthday}
            </p>
            <p className="min-w-[100px] text-sm text-center font-bold text-green">
              <StarIcon /> {data?.known_for_department}
            </p>
          </div>
          <h1 className="lg:text-[60px] text-[50px] leading-[0.75] font-[Staatliches] lg:text-start ">
            {data?.name}
          </h1>
          <p className="w-[80vw] lg:w-[60vw] line-clamp-[13] text-sm lg:text-md text-justify">
            <span className="text-[#554747ad] font-bold text-sm lg:text-lg">
              Biography:{" "}
            </span>
            {data?.biography}
          </p>
        </div>
      </div>
    
      <div className="w-screen flex flex-col mt-10">
        <CardSlider name={`${data.name}'s Shows`} data={tvCredits} dataType={'tv'} />
        <CardSlider name={`${data.name}'s Movies`} data={movieCredits} dataType={'movie'} />

      </div>
      </div>
    </>
  );
};

export default PersonDetailsPage;
