import React from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import Breadcrumbs from "./Breadcrumbs";

const PageNavigation = ({address}) => {
  return (
    <>
      <Link
        to={"/"}
        className="absolute top-6 z-[100]  left-4 lg:hidden  rounded-xl p-3 text-center bg-[#9c9b9b50] backdrop-blur-sm  "
      >
        <ArrowBack />
      </Link>
      <div className="absolute top-5  z-[100] lg:left-[-80px] left-[-5px] lg:block hidden">
        <Breadcrumbs address={address} />
      </div>
    </>
  );
};

export default PageNavigation;
