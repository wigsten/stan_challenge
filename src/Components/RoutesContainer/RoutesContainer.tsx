import React from 'react';

import styled from 'styled-components'

import { Routes, Route } from 'react-router-dom'

import Home from './../../Pages/Home/Home'
import Program from './../../Pages/Program/Program'
import { Menu } from './../../Components/Menu/Menu';
import { MovieDataProps } from '../../App';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const Body = styled.div`
  margin: 20px;
  max-width: 90%;
  overflow: hidden;
  @media (min-width: 719px) {
    max-width: 720px;
    margin: 50px;
  }
  @media (min-width: 1080px) {
    max-width: 1080px;
  }
`

const Wrapper = styled.div`
  display: flex;
  @media (min-width: 719px) {
    justify-content: center;
  }
  
`
export const RoutesContainer = ({ data, dataState }: MovieDataProps) => (
  <Wrapper>
    <Body className="App">
      <Menu />
      <Routes>
        <Route path="/program/:id" element={<Program dataState={dataState} data={data} />} />
        <Route path="/" element={<Home dataState={dataState} data={data} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Body>
  </Wrapper>
)