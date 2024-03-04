import React from "react";
import { CardSlider, MainSlider } from "../components";
import { useGetData } from "../hooks";
import { BallTriangle, Grid, MutatingDots } from "react-loader-spinner";


const Body = () => {
  const popularMovie = useGetData("Popular Movies", "/movie/popular");
  const popularTV = useGetData("Popular TV", "/tv/popular");
  const popularPerson = useGetData("Popular Person", "/person/popular");
  const trendingMovieData = useGetData("trending", "/trending/all/day");
  if (trendingMovieData.isLoading && popularMovie.isLoading && popularTV.isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center flex-col gap-6">

      <BallTriangle
        height={70}
        width={70}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        <p>please wait...</p>
        </div>
    );
  } else {
    return ( <>
        <div>
          <MainSlider data={trendingMovieData} />
          <CardSlider
            name={"Popular Movies"}
            data={popularMovie}
            dataType={"movie"}
          />
          <CardSlider name={"Popular TV"} data={popularTV} dataType={"tv"} />
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

export default Body;
