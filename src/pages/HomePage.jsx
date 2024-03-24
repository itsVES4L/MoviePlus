import React, { memo } from "react";
import { useGetData } from "../hooks";
import { CardSlider, MainSlider } from "../components";
import Loader from "../components/common/Loader";
import { Header } from "../layouts";

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
        <div className="relative">
          <Header />
          <MainSlider data={trendingMovieData} />

          <CardSlider
            name={"Popular Movies"}
            data={popularMovie}
            dataType={"movie"}
          />
          <CardSlider
            name={"Trending Movies"}
            data={trendingMovie}
            dataType={"movie"}
            isBackdrop={true}
          />
          <CardSlider name={"Popular Shows"} data={popularTV} dataType={"tv"} />
          <CardSlider
            name={"Trending Shows"}
            data={trendingTV}
            dataType={"tv"}
            isBackdrop={true}
          />
          <CardSlider
            name={"Popular People"}
            data={popularPerson}
            dataType={"person"}
          />
        </div>
      </>
    );
  }
};

export default HomePage;
