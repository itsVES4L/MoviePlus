import React from 'react';
import { CardSlider, MainSlider } from '../components';
import { useGetData } from '../hooks';
// import { Menu } from '../components';

const Body = () => {
    const upComingMovie = useGetData("upComingMovie", "/movie/upcoming");

    return (
        <div>
            <MainSlider/>
            <CardSlider movies={upComingMovie}/>
        </div>
    );
};

export default Body;