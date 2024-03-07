import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className=" w-screen rounded-tl-[10%]  bg-blackShade border-t border-[#8efaa086] rounded-tr-[40%] flex flex-col sm:flex-row justify-center items-center sm:justify-evenly  ">
      <div className="w-screen p-10 gap-10   z-60 h-fit flex justify-around flex-col sm:flex-row items-center text-[#ffffff85]">
        {/* social media */}
        <div className="flex sm:flex-col gap-5">
          <a className="text-white" href="https://github.com/itsVES4L">
            <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff59]">
              <GitHubIcon /> GitHub{" "}
            </div>
          </a>
          <a className="text-white" href="www.instagram.com/whosvesal">
            <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff57]">
              <InstagramIcon /> Instagram{" "}
            </div>
          </a>
        </div>
      {/* links */}
      <div className="flex  flex-row h-fit w-screen justify-evenly ">
        <div> </div>
        <div>
          {" "}
          <ul className="flex flex-col gap-2 ">
            <li className="text-xl hover:text-white w-fit ">TV</li>
            <div className="ml-2 text-md ">
              <li className="hover:text-white">Trending Shows</li>
              <li className="hover:text-white"> Popular Shows </li>
              <li className="hover:text-white"> Upcoming Shows </li>
            </div>
          </ul>{" "}
        </div>
        <div>
          {" "}
          <ul className="flex flex-col gap-2">
            <li className="text-xl hover:text-white ">Movies</li>
            <div className="ml-2 text-md">
              <li className="hover:text-white">Trending Movies</li>
              <li className="hover:text-white"> Popular Movies </li>
              <li className="hover:text-white"> Upcoming Movies </li>
            </div>
          </ul>{" "}
        </div>
        <div></div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
