import React from "react";

const Genres = ({ genres }) => {
  return (
    <>
      {genres?.map((genre) => {
        return (
          <span
            key={genre.id}
            className="px-[5px] text-[10px]  lg:text-[15px] text-center text-[#fffffffd] rounded-lg border border-[#62e262b2] bg-[#0080006e]"
          >
            {genre.name}
          </span>
        );
      })}
    </>
  );
};

export default Genres;
