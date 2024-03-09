import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ address }) => {
  return (
    <div className="text-sm breadcrumbs sm:ml-24 ml-0  px-2 py-1 rounded-lg bg-blackShade w-fit ">
      <ul>
        <li className="hover:no-underline">
          <Link className="hover:no-underline" to={"/"}>
            Home
          </Link>
        </li>
        {address?.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
