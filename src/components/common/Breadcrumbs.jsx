import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ address }) => {
  return (
    <div className="text-sm breadcrumbs ml-20  px-2 py-1 rounded-xl bg-blackShade w-fit ">
      <ul>
        <li className="hover:no-underline">
          <Link className="hover:no-underline" to={'/'}>Home</Link>
        </li>
        {address?.map((item,i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
