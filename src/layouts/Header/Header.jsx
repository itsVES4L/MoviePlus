import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${styles.container} w-full sticky  top-0 z-10   rounded-b-3xl`}
    >
      <div className={` sm:ml-10  navbar container  `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`${
                !isOpen && "hidden"
              } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52`}
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/search"}>Search</Link>
              </li>
              <li>
                <Link
                  to={`/category/movie?with_genre=%20&page=1&mediaType=movie`}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link to={"/category/tv?with_genre=%20&page=1&mediaType=tv"}>
                  Shows
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to={"/"}
            className="w-fit z-30  text-[8px]   cursor-pointer sm:text-[15px]  sm:p-4  "
          >
            <img
              className="w-[90px]  z-40 top-1   sm:w-[150px] "
              src={Logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end">
          <Link to={"/search"}>
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </Link>
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-squircle">
                <img
                  className="opacity-40 bg-[#ffffff6c] backdrop:blur-[15px]"
                  src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
