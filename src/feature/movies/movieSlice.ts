import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { moveieBaseURL } from "../../api/movieApi";
import { API_KEY } from "../../api/movieApiKey";


export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry"
    const response = await moveieBaseURL.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`);
    console.log("response", response.data);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",
  async () => {
    const showText = "Friends"
    const response = await moveieBaseURL.get(`?apiKey=${API_KEY}&s=${showText}&type=series`);
    console.log("response", response.data);
    return response.data;
  }
)

const initialState = {
  movies: {},
  shows: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    }
  },
  extraReducers: (builderArg) => {
    builderArg.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending");
    });
    builderArg.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      console.log("Fetched Successfully");
      state.movies = action.payload;
    });
    builderArg.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected");
    });

    builderArg.addCase(fetchAsyncShows.pending, () => {
      console.log("Pending");
    });

    builderArg.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      console.log("Fetched Successfully");
      state.shows = action.payload;
    });
    builderArg.addCase(fetchAsyncShows.rejected, () => {
      console.log("Rejected");
    });
  }
})

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state: RootState) => state.movieReducer.movies;