import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movies/movieSlice'

// type RootState
 export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        movieReducer
    }
})

