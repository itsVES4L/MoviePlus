import React from 'react';

const Poster = ({imageUrl,vote,bgColor}) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="  sm:w-fit  h-fit relative cursor-pointer">
        <img
          className="sm:h-[40vh] min-w-[92px] sm:min-w-[150px] h-[25vh] rounded-lg"
          src={imageBaseUrl + imageUrl}
          alt="poster"
        />
        <div className={`flex items-center justify-center ${bgColor} absolute sm:bottom-[-10px] sm:left-[-18px] bottom-[-8px] text-[12px] sm:text-lg font-bold left-[-10px] w-10 h-10  sm:w-14 sm:h-14 rounded-full  `}>
          <div className="sm:w-10 sm:h-10 w-7 h-7  bg-green rounded-full flex items-center justify-center text-center">
            {vote?.toFixed(1)}
          </div>
        </div>
      </div>
    );
};

export default Poster;