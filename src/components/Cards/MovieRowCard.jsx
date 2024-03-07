import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import Poster from "../common/Poster";
import StarIcon from "@mui/icons-material/StarRounded";
import DateIcon from "@mui/icons-material/InsertInvitationRounded";
import { Link } from "react-router-dom";
const MovieRowCard = ({ data }) => {
  // handle differences between "MOVIE" & "TV" details
  const dataTypeDetails =
    (data.media_type === "movie" && ["movie", data.title, data.release_date]) ||
    (data.media_type === "tv" && ["tv", data.name, data.first_air_date]);

  // get and find genres by "genre_ids" value
  const [genres, setGenres] = useState([]);
  const getGenres = useGetData("genres", `genre/${dataTypeDetails[0]}/list`)
    ?.data?.genres;
  useEffect(() => {
    const genresArray = [];
    data?.genre_ids?.map((genreId) => {
      genresArray.push(getGenres?.find((genreObj) => genreObj.id === genreId));
      setGenres(genresArray);
    });
  }, [data]);

  return (
    <Link to={`/details/${data.id}`}>
      <div
        className=":w-[80vw] sm:h-[46vh]
    h-fit
    rounded-xl relative bg-blackShade sm:p-5 p-7  flex  flex-col sm:flex-row    gap-8"
      >
        {/* poster */}

        <Poster
          bgColor={"bg-blackShade"}
          imageUrl={data?.poster_path}
          vote={data?.vote_average}
        />

        {/* details */}
        <div>
          {/* Release date and vote */}
          <div className=" flex w-full sm:w-fit mr-4 sm:mr-0  sm:gap-0 gap-10 text-center">
            <p className="  sm:text-[14px] text-sm w-[150px] text-center text-[#c4baba7a]">
              <DateIcon />( {dataTypeDetails[2]} )
            </p>
            <p className=" min-w-[100px] sm:text-[16px] text-sm text-center bold text-green">
              {" "}
              <StarIcon /> {data?.vote_average?.toFixed(1)} ({data?.vote_count}){" "}
            </p>
          </div>
          {/* Title, genre and overview */}
          <div className="py-4 ml-1 sm:ml-0">
            {/* title */}
            <p className="sm:text-[30px] line-clamp-1 sm:w-[400px]  font-bold">
              {" "}
              {dataTypeDetails[1]}{" "}
            </p>
            <div className="flex gap-[5px] ">
              {/* genre */}
              {genres?.map((genre) => {
                return (
                  <span
                    key={genre?.id}
                    className=" px-[5px] text-center text-[#fffffffd] text-[11px]  rounded-xl border border-[#62e262b2] bg-[#0080006e]"
                  >
                    {" "}
                    {genre?.name}{" "}
                  </span>
                );
              })}
            </div>
            <div className="mt-4  overflow-hidden line-clamp-4 ">
              {/* overview */}
              <p className=" text-pretty sm:w-[45vw] w-[60vw] text-[15px]">
                {" "}
                <span className="text-[#ffffff65] font-bold">
                  Overview :
                </span>{" "}
                {data?.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieRowCard;
