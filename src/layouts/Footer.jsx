import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  // <div className=" w-screen rounded-tl-[10%]  bg-blackShade border-t border-[#8efaa086] sm:rounded-tr-[40%] rounded-tr-[10%] flex flex-col sm:flex-row justify-center items-center sm:justify-evenly z-40  ">
  //   <div className="w-screen p-10 gap-10   z-60 h-fit flex justify-around flex-col sm:flex-row items-center text-[#ffffff85]">
  //     {/* social media */}
  //     <div className="flex sm:flex-col gap-5">
  //       <a className="text-white" href="https://github.com/itsVES4L">
  //         <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff59]">
  //           <GitHubIcon /> GitHub{" "}
  //         </div>
  //       </a>
  //       <a className="text-white" href="https://www.linkedin.com/in/itsVES4L">
  //         <div className="flex text-black justify-center items-center gap-1 p-2 rounded hover:text-white hover:bg-green font-bold bg-[#ffffff57]">
  //           <LinkedinIcon /> Linkedin{" "}
  //         </div>
  //       </a>
  //     </div>
  //   {/* links */}
  //   <div className="flex  flex-row h-fit w-screen justify-evenly ">
  //     <div> </div>
  //     <div>
  //       {" "}
  //       <ul className="flex flex-col gap-2 ">
  //         <h1 className="text-xl  w-fit ">Shows</h1>
  //         <div className="flex flex-col gap-2 ml-0 text-sm  ">
  //           <li className="hover:text-white">Trending Shows</li>
  //           <li className="hover:text-white"> Popular Shows </li>
  //           <li className="hover:text-white"> Upcoming Shows </li>
  //         </div>
  //       </ul>{" "}
  //     </div>
  //     <div>
  //       {" "}
  //       <ul className="flex flex-col gap-2">
  //         <h1 className="text-xl  ">Movies</h1>
  //         <div className="flex flex-col gap-2 ml-0 text-sm ">
  //           <li className="hover:text-white">Trending Movies</li>
  //           <li className="hover:text-white"> Popular Movies </li>
  //           <li className="hover:text-white"> Upcoming Movies </li>
  //         </div>
  //       </ul>{" "}
  //     </div>
  //     <div></div>
  //   </div>
  //   </div>
  // </div>
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content  border-t border-[#8efaa086]    ">
        <nav>
          <h6 className="footer-title">Movies</h6>
          <a
            href="/category/movie?with_genre=28&page=1&mediaType=movie"
            className="link hover:text-green no-underline"
          >
            Action Movies
          </a>
          <a
            href="/category/movie?with_genre=35&page=1&mediaType=movie"
            className="link hover:text-green no-underline"
          >
            Comedy Movies
          </a>
          <a
            href="/category/movie?with_genre=18&page=1&mediaType=movie"
            className="link  hover:text-green no-underline"
          >
            Drama Movies
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Shows</h6>
          <a
            href="/category/tv?with_genre=16&page=1&mediaType=tv"
            className="link  hover:text-green no-underline"
          >
            Animation Shows
          </a>
          <a
            href="/category/tv?with_genre=10759&page=1&mediaType=tv"
            className="link hover:text-green no-underline"
          >
            Action & Adventure Shows
          </a>
          <a
            href="/category/tv?with_genre=10765&page=1&mediaType=tv"
            className="link hover:text-green no-underline"
          >
            Fantasy Shows
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a target="_blank" href="https://www.linkedin.com/in/itsVES4L">
              <LinkedinIcon className="hover:text-green" fontSize="large" />
            </a>
            <a target="_blank" href="https://github.com/itsVES4L">
              <GitHubIcon className="hover:text-green" fontSize="large" />
            </a>
          </div>
        </nav>
      </footer>
      <aside className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2024 - All right reserved by itsVES4L</p>
      </aside>
    </div>
  );
};

export default Footer;
