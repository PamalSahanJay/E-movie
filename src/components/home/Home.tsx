import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'
import { moveieBaseURL } from '../../api/movieApi'
import { API_KEY } from '../../api/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../feature/movies/movieSlice'

const Home: React.FC = () => {
  const dispatch = useDispatch();  
  useEffect(() => {
    const movieText = "Harry"
    const fetchMovieList = async () => {
       try {
        const response =  (await moveieBaseURL.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`))
        // console.log(response.data)
        dispatch(addMovies(response.data))
        return response.data
      } catch (error) {
        console.error("error occure while fetching")
        return []
      }
    }

    fetchMovieList();
   
    return () => {
      //unmount
    }
  }, [])
  
  return (
    <div className='banner-img'>
      <MovieListing/>
    </div>
  )
}

export default Home