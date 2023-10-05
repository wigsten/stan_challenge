import React from 'react';
import { MovieDataProps } from '../../App';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const ErrorHandling = ({ dataState, children }: MovieDataProps) => {
  if (dataState === 'error') { // ref enum here 
    return <ErrorPage />
  } else {
    return children
  }
}

export default ErrorHandling;

