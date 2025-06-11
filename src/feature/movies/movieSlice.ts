import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


const initialState = {
  movies: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {  
    addMovies: (state, action) => {
        state.movies = action.payload;
    }
    },

  })

  export const { addMovies } = movieSlice.actions;
  export default movieSlice.reducer;
  export const getAllMovies = (state: RootState) => state.movieReducer.movies;