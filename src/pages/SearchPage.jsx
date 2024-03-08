import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieRowCard, Loader, Breadcrumbs } from "../components";

const SearchPage = () => {
  const [movieName, setMovieName] = useState(null);
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setMovieName(e.target.value);
  };

  const searchHandler = () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/multi",
      params: {
        query: movieName,
        include_adult: "true",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjZiZTAyYzBjOTVlNTU0YTExMzM2NGEyZDM2YTYzMiIsInN1YiI6IjY1YzVlMzc3NTM0NjYxMDE3YjhiNzkyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OQEweWswz1ey2eFuFOWc3mZdR2qxU9tW5UMjIl80dLU",
      },
    };

    const result = axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    setData(result);
  };

  useEffect(searchHandler, [movieName]);


  return (
    <div>
      <div className="ml-10">
      <Breadcrumbs address={['Search']} />
      </div>
      <div className="w-screen flex justify-center mt-10">
        <input
          value={movieName}
          onChange={changeHandler}
          className=" backdrop:blur-xl 
             bg-blackShade sm:p-3  p-2 pl-6 rounded-xl outline-none focus:outline-green  w-[80vw]"
          type="text"
          placeholder="Search movie by name :"
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
    </div>
  );
};

export default SearchPage;
