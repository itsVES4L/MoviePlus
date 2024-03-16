import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-[100dvh] flex justify-center items-center flex-col gap-6">
    
      <span
        class="loader 
        "
      ></span>
      <p>please wait...</p>
    </div>
  );
};

export default Loader;
