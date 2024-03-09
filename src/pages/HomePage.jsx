import React from "react";
import { useGetData } from "../hooks";
import { CardSlider, MainSlider } from "../components";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const popularMovie = useGetData("Popular Movies", "/movie/popular");
  const trendingMovie = useGetData("trending Movies", "/trending/movie/day");

  const popularPerson = useGetData("Popular Person", "/person/popular");
  const popularTV = useGetData("Popular TV", "/tv/popular");
  const trendingTV = useGetData("trending TV", "/trending/tv/day");

  const trendingMovieData = useGetData("trending", "/trending/all/day");

  if (
    (trendingMovieData.isLoading &&
      popularMovie.isLoading &&
      popularTV.isLoading) ||
    trendingMovieData.isError
  ) {
    return <Loader />;
  } else {
    return (
      <>
        <div>
          <MainSlider data={trendingMovieData} />

          <CardSlider
            name={"Popular Movie"}
            data={popularMovie}
            dataType={"movie"}
          />
          <CardSlider
            name={"Trending Movies"}
            data={trendingMovie}
            dataType={"movie"}
            isBackdrop={true}
          />
          <CardSlider
            name={"Popular Series"}
            data={popularTV}
            dataType={"tv"}
          />
          <CardSlider
            name={"Trending Series"}
            data={trendingTV}
            dataType={"tv"}
            isBackdrop={true}
          />
          <CardSlider
            name={"Popular Person"}
            data={popularPerson}
            dataType={"person"}
          />
        </div>
      </>
    );
  }
};

export default HomePage;
