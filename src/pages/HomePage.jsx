import React from "react";
import { useGetData } from "../hooks";
import { CardSlider, MainSlider } from "../components";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
  const popularMovie = useGetData("Popular Movies", "/movie/popular");
  const popularPerson = useGetData("Popular Person", "/person/popular");
  const popularTV = useGetData("Popular TV", "/tv/popular");
  const trendingMovieData = useGetData("trending", "/trending/all/day");

  const Data = [
    { data: popularMovie, name: "Popular Movie", dataType: "movie" },
    { data: popularTV, name: "Popular TV", dataType: "tv" },
    { data: popularPerson, name: "Popular Person", dataType: "person" },
  ];


  if (
    trendingMovieData.isLoading &&
    !trendingMovieData.isError &&
    popularMovie.isLoading &&
    popularTV.isLoading
  ) {
    return <Loader />;
  } else {
    return (
      <>
        <div>
          <MainSlider data={trendingMovieData} />
          {Data.map((item) => {
            return (
              <CardSlider
                key={item.name}
                name={item.name}
                data={item.data}
                dataType={item.dataType}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default HomePage;
