import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
    // Fetch the data from TMDB API and update the Store
      const dispatch = useDispatch();
      useEffect(()=>{
        nowPlayingMovies();
      },[])
    
      const nowPlayingMovies = async()=>{
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
          const data = await response.json();
          dispatch(addNowPlayingMovies(data.results))
          console.log(data.results)
        } catch (error) {
          console.log(error)
        }
      }
}

export default useNowPlayingMovies;
