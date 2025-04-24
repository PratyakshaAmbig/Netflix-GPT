import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(title,movies);
    // Ensure movies is an array and has at least 2 items
  //  if (!Array.isArray(movies) || movies.length === 0) return null
    // checks if 'movies' is not an array (e.g., undefined or null)
   // checks if it's an empty array
  //  If movies is not a valid array OR it’s an empty array, don’t render anything.    

  return (
    <div className='px-6'>
       <h1 className='text-2xl py-3 text-white'>{title}</h1>
       <div className='flex overflow-x-scroll scrollbar-hide'>    
        <div className='flex '>
        {movies?.map((movie, index) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
       </div>
    </div>
  )
}

export default MovieList
