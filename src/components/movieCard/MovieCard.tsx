import React from 'react'
import type { MovieCardProps } from '../../types/movie'
import './MovieCard.scss'

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h3>{data.Title}</h3>
            <p>{data.Year}</p>
            <p>{data.Type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard