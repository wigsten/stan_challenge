import React, { useEffect, useRef, useState } from 'react';
import { MovieDataProps, iMovie } from '../../App'
import { CarouselItem } from './CarouselItem'

interface CarouselItemProps extends MovieDataProps {
  loading?: string | number,
  currentCarouselItemFocused: string | number,
}

export const CarouselItems = ({ data, loading, currentCarouselItemFocused }: CarouselItemProps) => (
  <>
    {data?.map((program: iMovie, index: number) =>
      <CarouselItem currentCarouselItemFocused={currentCarouselItemFocused} program={program} key={program.id || index} index={index} loading={loading} />
    )}
  </>
)
