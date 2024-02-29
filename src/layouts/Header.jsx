import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="w-screen flex items-center sticky top-0 justify-between sm:sticky z-10">
      {/* <--Logo--> */}
      <div className="w-fit  text-[10px] cursor-pointer sm:text-[15px] p-2 sm:p-4  ">
        <p className="relative ">
          <span className="absolute top-[-2px] sm:top-[-13px] w-fit ">The</span>
          <span className="font-bold flex text-xl sm:text-3xl justify-center items-center">
            Movie <span className="font-bold text-green text-3xl "> +</span>
          </span>{" "}
        </p>
      </div>
      {/* <-/-Logo--> */}
      <div className="mr-2 sm:mr-10 relative flex w-fit h-fit items-center ">
        <SearchIcon className='absolute z-40 ml-1 ' fontSize="small"/>
        <input
          className="text-[10px] sm:p-2 p-1.5 w-6 sm:px-8 text-center  outline-none rounded-lg  backdrop-blur-lg bg-[#2020208c] "
          type="text"
          placeHolder="search"
        />
      </div>
    </div>
  );
};

export default Header;
