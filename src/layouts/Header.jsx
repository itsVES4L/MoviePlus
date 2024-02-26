import React from "react";
import { SearchPage } from "../pages";

const Header = () => {
  return (
    <div className="w-screen flex items-center justify-between absolute z-10">
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
      {/* <div className="mr-10 glass p-2 ">
       <button className=" btn btn-accent btn-outline"> search for movie </button>
      </div> */}
    </div>
  );
};

export default Header;
