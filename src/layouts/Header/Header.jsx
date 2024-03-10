import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";
const Header = () => {
  return (
    <div
      className={`w-screen flex items-center sticky top-0 justify-between sm:sticky z-10 py-2   ${styles.container}     rounded-b-3xl`}
    >
      {/* <--Logo--> */}
      <Link
        to={"/"}
        className="w-fit z-30  text-[8px]   cursor-pointer sm:text-[15px]  sm:p-4  "
      >
        <img className="w-[120px] absolute z-40 top-1 sm:top-0 left-2 sm:w-[160px] " src={Logo} alt="" />
      </Link>
      {/* <-/-Logo--> */}
      <Link
        to={"/search"}
        className="mr-3 sm:mr-10 cursor-pointer  rounded-lg relative flex  w-fit h-fit z-30  items-center "
      >
        <button
          className=" w-12 h-8 flex justify-center sm:justify-start items-center sm:w-32
         rounded-lg  text-center   hover:border
          hover:border-green backdrop-blur-lg bg-[#2020208c] "
        >
          <SearchIcon className="p-1" />
          <span
            className=" hidden sm:block 
          ml-6 text-[10px] text-[#8b7777]"
          >
            Search
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Header;
