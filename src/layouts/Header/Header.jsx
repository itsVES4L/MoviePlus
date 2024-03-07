import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div
      className={`w-screen flex items-center sticky top-0 justify-between sm:sticky z-10  ${styles.container}     rounded-b-3xl`}
    >
      {/* <--Logo--> */}
      <div className="w-fit z-30   text-[8px] cursor-pointer sm:text-[15px] p-2 sm:p-4  ">
        <p className="relative ">
          <span className="absolute top-[-1px] sm:top-[-13px] w-fit ">The</span>
          <span className="font-bold flex text-lg sm:text-3xl justify-center items-center">
            Movie <span className="font-bold text-green text-3xl "> +</span>
          </span>{" "}
        </p>
      </div>
      {/* <-/-Logo--> */}
      <div className="mr-3 sm:mr-10 cursor-pointer  rounded-lg relative flex  w-fit h-fit z-30  items-center ">
        <button
          className=" w-7 h-7 flex justify-center sm:justify-start items-center sm:w-32
         rounded-lg  text-center   hover:border
          hover:border-green backdrop-blur-lg bg-[#2020208c] "
        >
          <SearchIcon className="p-1" />
          <span className=" hidden sm:block 
          ml-6 text-[10px] text-[#8b7777]">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
