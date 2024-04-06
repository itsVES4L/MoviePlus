import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-[100dvh] flex justify-center items-center flex-col gap-6">
      <span className="loading loading-bars loading-lg text-green"></span>
      <p>please waite ...</p>
    </div>
  );
};

export default Loader;
