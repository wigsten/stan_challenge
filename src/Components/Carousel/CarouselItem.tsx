import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../Commons/constants';
import { iMovie } from '../../App';


const CarouselItemDiv = styled.div<{ $loading: boolean, $focus: string | boolean }>`
  width: 210px;
  min-width: 210px;
  min-height: 300px;

  ${({ $loading }) => !$loading && `
    cursor: pointer;
    &:focus-visible,
    &:focus,
    &:hover {
    outline: none;
    box-shadow: none;
    border-color: ${COLORS.BRAND_BLUE_SOFT}; // variation to differentiate between tab and arrow navigation
  }

  `}
  margin-right: 5px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  cursor: pointer;
  background: #606060;
  border: 4px solid #101010;
  display: block;
  border-radius: 4px;
  height: 100%;
  width: 100%;

  ${({ $focus }) => $focus && `
    border-color: ${COLORS.BRAND_BLUE};
  `}

  & img {
    width: 100%;
    border: 2px solid #101010;
    max-width: 100%;
    display: block;
  }
`

interface CarouselItemProps {
  currentCarouselItemFocused: number | string,
  index: number,
  loading: any,
  program: iMovie,
}

export const CarouselItem = ({ currentCarouselItemFocused, index, loading, program }: CarouselItemProps) => {
  const ref = useRef<any>()

  const navigate = useNavigate();

  useEffect(() => {
    if (currentCarouselItemFocused !== -1 && index == currentCarouselItemFocused) {
      ref.current?.focus()
      ref.current?.scrollIntoView()
    }
  }, [currentCarouselItemFocused])

  const handleOnClick = (event: any): void => {
    if (!loading) navigate(`/program/${program.id}`)
  }

  return (
    <CarouselItemDiv onClick={handleOnClick} ref={ref} $focus={currentCarouselItemFocused === index} $loading={loading}>
      {!loading && <img tabIndex={-1} src={program.image} />}
    </CarouselItemDiv>
  )
}
