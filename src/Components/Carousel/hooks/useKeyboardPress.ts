import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { iMovie } from '../../../App';

export const useKeyboardPress = (
  data: iMovie[],
) => {

  const navigate = useNavigate();

  const [currentFocus, setCurrentFocus] = useState(-1)

  useEffect(() => {
    let dataLength = data?.length || 0

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        return navigate(`/program/${data[currentFocus].id}`)
      }
      else if (event.key === 'Escape') {
        setCurrentFocus(-1)
      }
      else if (event.key === 'ArrowLeft') {
        if (currentFocus === -1) {
          setCurrentFocus(dataLength - 1)
        } else {
          setCurrentFocus(CF => CF - 1)
        }
      } else if (event.key === 'ArrowRight') {
        if (currentFocus === -1) {
          setCurrentFocus(0)
        }
        else if (currentFocus === dataLength - 1) {
          setCurrentFocus(-1)
        } else {
          setCurrentFocus(CF => CF + 1)
        }
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [setCurrentFocus, data, currentFocus]);
  return currentFocus
};