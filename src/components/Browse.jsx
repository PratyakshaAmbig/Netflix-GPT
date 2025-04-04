import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse
