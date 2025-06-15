import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../feature/movies/movieSlice'
import MovieCard from '../movieCard/MovieCard'
import type { Movie, MovieApiResponse } from '../../types/movie'
import './MovieListing.scss'

import type { RootState } from '../../feature/store'

const useAppSelector = useSelector.withTypes<RootState>();

const MovieListing: React.FC = () => {
  const movieList: MovieApiResponse = useAppSelector(getAllMovies);
  const showList: MovieApiResponse = useAppSelector(getAllShows)
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

  const showRender = showList.Response === "False" ||
    !showList.Search ||
    showList.Search.length === 0 ? (
    <div className='movie-error'>
      <h3>{showList.Error}</h3>
    </div>
  ) : (
    showList.Search.map((show: Movie, index: number) => {
      return <MovieCard key={index} data={show} />
    })
  )

  
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movie List</h2>
        <div className='movie-container'> {movieRender} </div>
      </div>
      <div className='show-list'>
        <h2>Show List</h2>
        <div className='movie-container'> {showRender} </div>
      </div>
    </div>
  )
}

export default MovieListing