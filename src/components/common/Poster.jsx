import React, { memo, useEffect, useState } from "react";

const Poster = ({ imageUrl, vote, bgColor }) => {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  const [url, setUrl] = useState(imageUrl);
  useEffect(() => {
    setUrl(imageUrl);
  }, [imageUrl]);
  return (
    <div className="  sm:w-fit  h-fit relative cursor-pointer">
      <img
        className="sm:h-[40vh] min-w-[92px] sm:min-w-[150px] h-[25vh] rounded-lg"
        src={imageBaseUrl + url}
        alt="poster"
      />
      <div
        className={`${
          !vote && "hidden"
        } flex items-center justify-center ${bgColor} absolute sm:bottom-[-10px] sm:left-[-18px] bottom-[-8px] text-[12px] sm:text-lg font-bold left-[-10px] w-10 h-10  sm:w-14 sm:h-14 rounded-full  `}
      >
        <div
          className={` ${
            !vote && "hidden"
          } sm:w-10 sm:h-10 w-7 h-7  bg-green rounded-full flex items-center justify-center text-center`}
        >
          {vote?.toFixed(1)}
        </div>
      </div>
    </div>
  );
};

export default memo(Poster);
