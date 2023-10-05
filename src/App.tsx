import React, { ReactNode, useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom'
import { RoutesContainer } from './Components/RoutesContainer/RoutesContainer';

export interface iMovie {
  id?: string,
  title?: string,
  description?: string,
  type?: string,
  image?: string,
  rating?: string,
  genre?: string,
  year?: string,
  language?: string,
}

export type MovieDataProps = {
  data?: iMovie[] | null,
  dataState?: string, // 'loading' | 'idle' | 'success' | 'failed', // should be enums 
  children?: ReactNode,
}


function App() {
  const [data, setData] = useState<iMovie[] | null>(null)
  const [dataState, setDataState] = useState('init') // enum (replacement of redux for now), init | loading | success | error

  useEffect(() => {
    setTimeout(() => { // faking load times
      setDataState('loading')
      fetch('/data.json')
        .then(r => {
          r.json()
            .then(r => {
              setTimeout(() => {  // faking load times
                setDataState('succcess')
                setData(r.slice(0, 6)) // emulating fetching only 6 items

              }, 1200)
            })
            .catch(error => {
              setDataState('error')
              console.log('error details ', error)
            })
        })
    }, 1200)
    // issue with loading twice on dev
    // https://stackoverflow.com/a/60619061
  }, [])

  return (
    <BrowserRouter>
      <RoutesContainer dataState={dataState} data={data} />
    </BrowserRouter>
  );
}

export default App;
