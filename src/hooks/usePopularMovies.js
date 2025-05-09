import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
  
    useEffect(()=>{
        getPopularMovies();
    },[])

    const getPopularMovies = async ()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`,API_OPTIONS);
            const data = await response.json();
            dispatch(addPopularMovies(data.results));
        } catch (error) {
            console.log(error)
        }
    }
}

export default usePopularMovies;
