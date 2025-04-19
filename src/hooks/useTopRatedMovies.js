import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constant';
import { addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        getTopRatedMovies()
    },[])

    const getTopRatedMovies = async ()=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`,API_OPTIONS);
            const data = await response.json();
            dispatch(addTopRatedMovies(data.results))
        } catch (error) {
            console.log(error)
        }
    }
}

export default useTopRatedMovies
