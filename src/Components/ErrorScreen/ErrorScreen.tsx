import React from 'react';

import { MovieDataProps } from '../../App';


const ErrorScreen = ({ data }: MovieDataProps) => (
  <div className="App">
    <p>An unkonwn error occured. Please try again later.</p>
  </div>
);

export default ErrorScreen;
