import React from 'react';

const DetailsBox = ({title,value}) => {
    return (
        <div className="bg-[#ffffff15] backdrop-blur-[4px] rounded-3xl font-[Staatliches] md:h-[20vh] flex-grow lg:w-[15vw] lg:h-[20vh] w-[30vw] h-[10vh]   flex justify-center items-center relative text-white text-3xl ">
        <p className="lg:text-[12px] text-[10px] absolute md:text-[15px] lg:bottom-0  bottom-0 text-[#ffffff73] font-bold font-mons">
         {title}
        </p>
        <h1 className="lg:text-[40px] md:text-[50px] text-[30px] w-fit h-fit">
          {value}
        </h1>
      </div>
    );
};

export default DetailsBox;