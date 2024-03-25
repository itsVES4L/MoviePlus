import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div className=" w-screen rounded-tl-[10%]  bg-blackShade border-t border-[#8efaa086] sm:rounded-tr-[40%] rounded-tr-[10%] flex flex-col sm:flex-row justify-center items-center sm:justify-evenly z-40  ">
      <div className="w-screen p-10 gap-10   z-60 h-fit flex justify-around flex-col sm:flex-row items-center text-[#ffffff85]">
        {/* social media */}
        <div className="flex sm:flex-col gap-5">
          <a className="text-white" href="https://github.com/itsVES4L">
            <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff59]">
              <GitHubIcon /> GitHub{" "}
            </div>
          </a>
          <a className="text-white" href="https://www.linkedin.com/in/itsVES4L">
            <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff57]">
              <LinkedinIcon /> Linkedin{" "}
            </div>
          </a>
        </div>
      {/* links */}
      <div className="flex  flex-row h-fit w-screen justify-evenly ">
        <div> </div>
        <div>
          {" "}
          <ul className="flex flex-col gap-2 ">
            <h1 className="text-xl  w-fit ">Shows</h1>
            <div className="flex flex-col gap-2 ml-0 text-sm  ">
              <li className="hover:text-white">Trending Shows</li>
              <li className="hover:text-white"> Popular Shows </li>
              <li className="hover:text-white"> Upcoming Shows </li>
            </div>
          </ul>{" "}
        </div>
        <div>
          {" "}
          <ul className="flex flex-col gap-2">
            <h1 className="text-xl  ">Movies</h1>
            <div className="flex flex-col gap-2 ml-0 text-sm ">
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
