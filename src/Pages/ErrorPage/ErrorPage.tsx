import React from 'react';
import { Link } from 'react-router-dom';
import { MovieDataProps } from '../../App';

import { CarouselWrapper } from '../../Components/Carousel/CarouselWrapper';
import ErrorScreen from '../../Components/ErrorScreen/ErrorScreen';

const ErrorPage = ({ data }: MovieDataProps) => {
  return (
    <ErrorScreen />
  );
}

export default ErrorPage;
