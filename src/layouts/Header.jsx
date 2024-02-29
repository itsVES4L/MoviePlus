import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="w-screen flex items-center sticky top-0 justify-between sm:sticky z-10">
      {/* <--Logo--> */}
      <div className="w-fit  text-[8px] cursor-pointer sm:text-[15px] p-2 sm:p-4  ">
        
        <p className="relative ">
          <span className="absolute top-[-1px] sm:top-[-13px] w-fit ">The</span>
          <span className="font-bold flex text-lg sm:text-3xl justify-center items-center">
            Movie <span className="font-bold text-green text-3xl "> +</span>
          </span>{" "}
        </p>
      </div>
      {/* <-/-Logo--> */}
      <div className="mr-3 sm:mr-10 cursor-pointer  rounded-lg relative flex w-fit h-fit items-center ">
        <SearchIcon className='absolute z-40 ml-1  opacity-0 sm:opacity-100 ' fontSize="small"/>
        <input
          className="text-[10px] p-2 hidden sm:block sm:px-8 text-center  outline-none rounded-lg  backdrop-blur-lg bg-[#2020208c] "
          type="text"
          placeHolder="search"
        />
        <button className=" w-7 h-7 flex justify-center items-center sm:hidden rounded-lg  backdrop-blur-lg bg-[#2020208c] " > 
        <SearchIcon className='p-1' />
        </button>
      </div>
    </div>
  );
};

export default Header;
