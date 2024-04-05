import React, { useEffect, useRef, useState } from "react";

import {
  MovieRowCard,
  Loader,
  PageNavigation,
  PagePagination,
} from "../components";
import { fetchData } from "../api/api";
import { Header } from "../layouts";

const SearchPage = () => {
  const topRef = useRef(null);
  const [page, setPage] = useState(1);
  const [movieName, setMovieName] = useState("");
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setMovieName(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const result = await fetchData("search/multi", {
        query: movieName,
        language: "en-US",
        sort_by: "vote_count.desc",
        page: page,
      });
      setData(result);
    };
    search();
  }, [movieName, page]);

  return (
    <div>
      <PageNavigation address={["Search"]} />
      <div
        ref={topRef}
        className="w-screen flex justify-center  mt-10 lg:mt-16"
      >
        <input
          value={movieName}
          autoFocus
          onChange={changeHandler}
          className=" backdrop:blur-xl focus
             bg-blackShade sm:p-3  p-2 pl-6 rounded-xl outline-none focus:outline-green  w-[80vw]"
          type="text"
          placeholder="Search movie or people by name :"
        />
      </div>
      <div className="w-screen mt-20 flex justify-center ">
        <div className="w-fit h-fit flex flex-col gap-10 ">
          {data.results ? (
            data?.results?.map((item) => {
              return <MovieRowCard data={item} />;
            })
          ) : (
            <div className="w-screen  overflow-hidden">
              <Loader />
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        {data?.results?.length > 1 && (
          <PagePagination
            handleChange={(event, value) => {
              setPage(value);
              topRef.current.scrollIntoView();
            }}
            pages={data.total_pages}
          />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
