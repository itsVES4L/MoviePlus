import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-[40vh] flex justify-center items-center flex-col gap-6">
      {/* <BallTriangle
          height={70}
          width={70}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /> */}
      <span
        class="loader 
        "
      ></span>
      <p>please wait...</p>
    </div>
  );
};

export default Loader;
