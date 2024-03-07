import React from "react";
import Poster from "../common/Poster";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, dataType }) => {
  return (
    <Link to={`/details/${movie.id}`}>
      <div className=" bg-darkBlue flex flex-col gap-3 items-center py-8 ">
        <Poster
          bgColor={"bg-darkBlue"}
          imageUrl={movie?.poster_path}
          vote={movie?.vote_average}
        />
        <div className="font-[500] text-[13px]  sm:text-[17px] tracking-wider w-24 sm:w-32 line-clamp-2 text-center  text-balance cursor-pointer hover:text-green ">
          <h1>{dataType === "movie" ? movie?.title : movie?.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
