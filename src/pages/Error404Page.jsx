import React from "react";

const Error404Page = () => {
  return (
    <div className="h-full w-screen flex justify-center items-center flex-col gap-10 text-center">
      <div></div>
      <h1 className="font-logo sm:text-[250px] text-[120px] text-green ">4<span className="text-white">0</span>4</h1>
      <p className="sm:mr-20">Oooops page not found :(</p>
    </div>
  );
};

export default Error404Page;
