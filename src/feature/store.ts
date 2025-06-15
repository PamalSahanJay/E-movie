import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movies/movieSlice'

// getState is a function that why we use ReturnType
 export type RootState = ReturnType<typeof store.getState>
 // dispatch is a property that why we use without ReturnType
 export type AppDispatch = typeof store.dispatch

export const store = configureStore({
    reducer: {
        movieReducer
    }
})

