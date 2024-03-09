import React from "react";
import Poster from "../common/Poster";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, dataType, isBackdrop }) => {
  return (
    <Link to={`/details/${dataType}/${movie.id}`}>
      <div
        className={`  ${
          isBackdrop ? "  bg-blackShade p-6 sm:p-0" : "bg-darkBlue"
        }  flex flex-col gap-3 items-center py-8 `}
      >
        <Poster
          bgColor={isBackdrop ? "bg-blackShade" : "bg-darkBlue"}
          imageUrl={isBackdrop ? movie.backdrop_path : movie?.poster_path}
          vote={movie?.vote_average}
        />
        <div
          className={`font-[500] text-[13px] h-fit  sm:text-[17px] tracking-wider w-24 ${
            isBackdrop ? "sm:w-80 line-clamp-1" : "sm:w-32 line-clamp-2"
          }  text-center  text-balance cursor-pointer hover:text-green `}
        >
          <h1>{movie?.title || movie?.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
