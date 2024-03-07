import React from "react";

const PersonCard = ({ person }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

  console.log(imageBaseUrl + person.profile_path);
  return (
    <div className="  rounded-full mr-10  h-fit  sm:px-8 ">
      <div className="py-8 text-center pb-10 w-fit  flex flex-col  justify-center items-center gap-3   ">
        <div
          className=" flex 
          sm:grid
          justify-center items-center sm:w-[150px] w-[11vh] h-[11vh] sm:h-[150px] bg-white  overflow-hidden  rounded-full  "
        >
          <img
            className=" cursor-pointer relative sm:bottom-3 h-[16vh+10px] sm:h-[34vh+10px]  "
            src={imageBaseUrl + person.profile_path}
            alt=""
          />
        </div>
        <p className="hover:text-green text-[13px] cursor-pointer sm:text-[17px]  ">
          {person.name}
        </p>
      </div>
    </div>
  );
};

export default PersonCard;
