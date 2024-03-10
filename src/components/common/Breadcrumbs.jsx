import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ address }) => {
  return (
    <div className="sm:text-sm text-[10px] breadcrumbs sm:ml-24 ml-0  px-2 py-1 rounded-lg bg-[#8b858500] w-fit backdrop-blur-[4px]">
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
