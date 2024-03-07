import React from "react";
import Poster from "../common/Poster";

const MovieCard = ({ movie, dataType }) => {
 
  return (
    <div className=" bg-darkBlue flex flex-col gap-3 items-center py-8 ">
      <Poster imageUrl={movie?.poster_path} vote={movie?.vote_average} />
      <div className="font-[500] text-[13px]  sm:text-[17px] tracking-wider w-24 sm:w-32 line-clamp-2 text-center  text-balance cursor-pointer hover:text-green ">
        <h1>{dataType === "movie" ? movie?.title : movie?.name}</h1>
      </div>
    </div>
  );
};

export default MovieCard;