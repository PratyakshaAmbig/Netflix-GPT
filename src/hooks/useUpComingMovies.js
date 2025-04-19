import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = ()=>{
const dispatch = useDispatch();

useEffect(()=>{
    getUpComingMovies();
},[])

const getUpComingMovies = async()=>{
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`,API_OPTIONS);
        const data = await response.json();
        dispatch(addUpComingMovies(data.results))
    } catch (error) {
        console.log(error)
    }
}
}
export default useUpComingMovies;