import React from 'react';
import { CardSlider, MainSlider } from '../components';
import { useGetData } from '../hooks';
// import { Menu } from '../components';

const Body = () => {
    const popularMovie = useGetData("Popular Movies", "/movie/popular");

    return (
        <div>
            <MainSlider/>
            <CardSlider name={'Popular Movies'} movies={popularMovie}/>
        </div>
    );
};

export default Body;