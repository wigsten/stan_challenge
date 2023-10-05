import React from 'react';
import { Link } from 'react-router-dom';
import { MovieDataProps } from '../../App';

import { CarouselWrapper } from '../../Components/Carousel/CarouselWrapper';
import ErrorHandling from '../../Components/Commons/errorHandling';

const Home = ({ data, dataState }: MovieDataProps) => <CarouselWrapper dataState={dataState} data={data} />

export default Home;
