import { createSlice } from "@reduxjs/toolkit";

const initialState = { AllMovies: [] };

const MovieSlice = createSlice({
  name: "Movies",
  initialState: initialState,
  reducers: {
    AddMovies(state, action) {
      const Movie = action.payload;
      const existing = state.AllMovies.find(
        (movie) => movie.movie_id === Movie.movie_id
      );
      if (!existing) {
        state.AllMovies.push(Movie);
      }
    }
  }
});

export const MovieActions = MovieSlice.actions;

export default MovieSlice.reducer;
