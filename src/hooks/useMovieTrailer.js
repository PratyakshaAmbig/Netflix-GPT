import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getMovieVideos();
      }, []);
      // fetch the trailer video
      const getMovieVideos = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_OPTIONS
          );
          const data = await response.json();
          // console.log(data);
          const filterData = data?.results?.filter(
            (res) => res?.type === "Trailer"
          );
          const trailer = filterData.length ? filterData[0] : data?.results[0];
          dispatch(addTrailerVideo(trailer))
        } catch (error) {
          console.log(error);
        }
      };
  
}

export default useMovieTrailer
