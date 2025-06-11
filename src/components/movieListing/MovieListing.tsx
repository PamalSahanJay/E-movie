import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../feature/movies/movieSlice'
import MovieCard from '../movieCard/MovieCard'
import type { Movie, MovieApiResponse } from '../../types/movie'
import './MovieListing.scss'

const MovieListing: React.FC = () => {
  const movieList: MovieApiResponse = useSelector(getAllMovies)
  // console.log("Movie List:", movieList)

  const movieRender = movieList.Response === "False" ||
    !movieList.Search ||
    movieList.Search.length === 0 ? (
    <div className='movie-error'>
      <h3>{movieList.Error}</h3>
    </div>
  ) : (
    movieList.Search.map((movie: Movie, index: number) => {
      return <MovieCard key={index} data={movie} />
    })
  )
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movie List</h2>
        <div className='movie-container'> {movieRender} </div>
      </div>
    </div>
  )
}

export default MovieListing