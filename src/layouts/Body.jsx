import React from "react";
import { CardSlider, MainSlider } from "../components";
import { useGetData } from "../hooks";
import { MutatingDots } from "react-loader-spinner";
// import { Menu } from '../components';

const Body = () => {
  const popularMovie = useGetData("Popular Movies", "/movie/popular");
  const popularTV = useGetData("Popular TV", "/tv/popular");
  const popularPerson = useGetData("Popular Person", "/person/popular");
  const trendingMovieData = useGetData("trending", "/trending/all/day");
if (!trendingMovieData.isLoading) {

    return (
        <>
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
} else {
    return (<div className=" w-screen h-screen flex justify-center items-center">
        <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  secondaryColor="#4fa94d"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>)
}
};

export default Body;
