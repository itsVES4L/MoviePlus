import React, { memo, useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import Poster from "../common/Poster";
import StarIcon from "@mui/icons-material/StarRounded";
import DateIcon from "@mui/icons-material/InsertInvitationRounded";
import { Link } from "react-router-dom";
import { useGetGenres } from "../../hooks";
import Genres from "../common/Genres";

const MovieRowCard = ({ data, type }) => {
  const dataType = data.media_type || type;
  const genres = useGetGenres(dataType, data);

  return (
    <a href={`/${dataType}/${data.id}`} >
      
      <div className="w-full sm:max-w-[80vw] h-fit rounded-xl relative bg-blackShade sm:p-5 p-7 flex flex-col sm:flex-row gap-8">
        <div className="w-full sm:w-fit flex justify-center">
          <Poster
            bgColor="bg-blackShade"
            imageUrl={data?.poster_path || data?.profile_path}
            vote={data?.vote_average}
          />
        </div>
        <div>
          <div className="flex w-fit sm:w-fit sm:mr-0 sm:gap-0 gap-5 text-start">
            <p
              className={`${
                !(data.release_date || data.first_air_date) && "hidden"
              }  text-[#c4baba7a] w-[120px] sm:w-fit flex items-center`}
            >
              <DateIcon /> {data.release_date || data.first_air_date}
            </p>
            <p className="min-w-[100px] text-sm text-center font-bold text-green">
              <StarIcon /> {data?.vote_average?.toFixed(1)} (
              {data?.vote_count || data?.known_for_department})
            </p>
          </div>
          <div className="flex flex-col lg:items-start items-center py-4 ml-1 sm:ml-0">
            <p className="line-clamp-1 sm:w-[400px] w-[200px] text-[20px] sm:text-[35px]  font-bold">
              {data.name || data.title}
            </p>
            <div className="flex flex-wrap gap-[5px] w-[50vw]">
              <Genres genres={genres} />
            </div>
            <div className="mt-4 overflow-hidden line-clamp-4">
              <p className="text-[15px] text-justify w-[50dvw]">
                {data?.overview || data?.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default memo(MovieRowCard);
