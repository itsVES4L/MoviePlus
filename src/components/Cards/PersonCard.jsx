import React, { memo } from "react";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <Link to={`/details/${person.id}`}>
      <div className="  rounded-full mr-10   h-fit  sm:px-8 ">
        <div className="py-8 text-center pb-10 w-fit  flex flex-col  justify-center items-center gap-3   ">
          <div
            className=" flex 
          sm:grid
          justify-center items-center sm:w-[150px] w-[11vh] h-[11vh] sm:h-[150px]  overflow-hidden hover:border hover:border-green rounded-full  "
          >
            <img
              className=" cursor-pointer relative sm:bottom-3 h-[16vh+10px] sm:h-[34vh+10px]  "
              src={imageBaseUrl + person.profile_path}
              alt=""
            />
          </div>
          {
            <span className="px-[5px] text-[9px] line-clamp-1  text-center text-[#fffffffd] rounded-xl border border-[#62e262b2] bg-[#0080006e]">
              {person.character || person.known_for_department}
            </span>
          }
          <p className="hover:text-green text-[13px] cursor-pointer sm:text-[17px]  ">
            {person.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default memo(PersonCard);
