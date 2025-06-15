import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import type { AppDispatch, RootState } from '../../feature/store';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../feature/movies/movieSlice';
import type { MovieOrShowDetail } from '../../types/movie';
import './MovieDetail.scss';


const MovieDetail: React.FC = () => {
  const useAppDispatch = useDispatch.withTypes<AppDispatch>()
  const useAppSelector = useSelector.withTypes<RootState>()
  const data: MovieOrShowDetail = useAppSelector(getSelectedMovieOrShow)
  console.log(data.Plot)
  const dispatch = useAppDispatch();
  const movieImdbId = useParams<{ imdbId: string }>().imdbId

  useEffect(() => {
    if (movieImdbId) {
      dispatch(fetchAsyncMovieOrShowDetail(movieImdbId));
    }

    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, movieImdbId])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div className="loading-spinner">
          <div className="loading-circle"></div>
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail