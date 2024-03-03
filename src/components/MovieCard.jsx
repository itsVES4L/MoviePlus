import React from "react";

const MovieCard = ({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
 
  return (
    <div className=" bg-darkBlue flex flex-col gap-3 items-center py-8">
      <div className="w-fit h-fit relative">
        <img
          className="sm:h-[40vh] h-[15vh] rounded-lg"
          src={imageBaseUrl + movie.poster_path}
          alt=""
        />
        <div className="flex items-center justify-center bg-darkBlue absolute sm:bottom-[-10px] sm:left-[-18px] bottom-[-8px] text-[12px] sm:text-lg font-bold left-[-10px] w-10 h-10  sm:w-14 sm:h-14 rounded-full  ">
          <div className="sm:w-10 sm:h-10 w-7 h-7  bg-green rounded-full flex items-center justify-center text-center">
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
      </div>
      <div className="font-[500] text-[13px]  sm:text-[17px] tracking-wider w-24 sm:w-32 line-clamp-2 text-center  text-balance " >
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
