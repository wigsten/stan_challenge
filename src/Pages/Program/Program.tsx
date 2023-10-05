import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components'
import { iMovie, MovieDataProps } from '../../App';
import ErrorPage from '../ErrorPage/ErrorPage';

const ProgramDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 719px) {
    flex-direction: row;
  }
`

const Heroimage = styled.div`
  max-width: 100%;
  @media (min-width: 719px) {
    max-width: 200px;
  }
  @media (min-width: 1080px) {
    max-width: 300px;
  }
  width: 300px;
  margin-right: 20px;
  @media (min-width: 719px) {
    margin-right: 50px;
  }
  & img {
    max-width: 100%;
  }
`

const LoaderBox = styled.div<{ height: number, width: number }>`
  background: #606060;
  width: ${({ width = 0 }) => width}px;
  height: ${({ height = 0 }) => height}px;
  display: block;
  margin-bottom: 10px;
`

const ProgramDetails = styled.div`
  max-width: 600px;
`

interface ProgramProps {
  programDetails: iMovie | null
}

const ProgramView = ({ programDetails: movieProgram }: ProgramProps) => {
  return (
    <ProgramDiv>
      <div>
        <Heroimage>
          <img src={movieProgram?.['image']} />
        </Heroimage>
      </div>
      <ProgramDetails>
        <h1>{movieProgram?.['title']}</h1>
        <h4>
          {movieProgram?.['rating']} | {movieProgram?.['year']} | {movieProgram?.['genre']} | {movieProgram?.['language']}
        </h4>
        <p>
          {movieProgram?.['description']}
        </p>
      </ProgramDetails>
    </ProgramDiv>
  )
}

const LoadProgramView = () => {
  return (
    <>
      <ProgramDiv>
        <Heroimage>
          <LoaderBox width={300} height={400} />
        </Heroimage>
        <ProgramDetails>
          <LoaderBox width={260} height={30} />
          <LoaderBox width={230} height={25} />
          <LoaderBox width={600} height={120} />
        </ProgramDetails>
      </ProgramDiv>
    </>
  )
}

const Program = ({ data, dataState }: MovieDataProps) => {
  const params = useParams()

  const programDetails = data?.filter((program: iMovie) => {
    return Number(program.id) === Number(params.id) // safe to use number here as it's consistent
  })?.[0] || null;

  if (programDetails === null && data === null && dataState === 'error') {
    return <ErrorPage />
  }

  return (
    <div className="App">
      <>
        {data?.length && data !== null
          ? <ProgramView programDetails={programDetails} />
          : <LoadProgramView />
        }
      </>
    </div >
  );
}

export default Program;
