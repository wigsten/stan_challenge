

import React from 'react';

import styled from 'styled-components'
import { MovieDataProps } from '../../App';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import { useKeyboardPress } from './hooks/useKeyboardPress';
import { CarouselItems } from './CarouselItems';

const CarouselDivContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

export const CarouselWrapper = ({ data, dataState }: MovieDataProps) => {

  if (dataState === 'error') {
    return <ErrorPage />
  }

  const currentCarouselItemFocused = useKeyboardPress(data);

  return (
    <CarouselDivContainer>
      {data?.length && data !== null
        ? <CarouselItems currentCarouselItemFocused={currentCarouselItemFocused} data={data} />
        : <CarouselItems currentCarouselItemFocused={currentCarouselItemFocused} loading data={[{}, {}, {}, {}, {}, {}]} />
      }
    </CarouselDivContainer>
  );
}
