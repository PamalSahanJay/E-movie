import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/movies/movieSlice';
import type { AppDispatch } from '../../feature/store';

const Home: React.FC = () => {
  const useAppDispatch = useDispatch.withTypes<AppDispatch>()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [])
  
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home