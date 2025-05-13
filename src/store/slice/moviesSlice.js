import {createSlice} from '@reduxjs/toolkit';

import {
  getCategories,
  getMovieData,
  getPopulerMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  populerMovies: [],
  upcomingMovies: [],
  movieDetailData: {},
  categories: [],
  pending: false,
  pendingDetailData: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.pending = false;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.pending = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getPopulerMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPopulerMovies.fulfilled, (state, action) => {
        state.populerMovies = action.payload;
        state.pending = false;
      })
      .addCase(getPopulerMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getUpcomingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
        state.pending = false;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      })
      .addCase(getMovieData.pending, state => {
        state.pendingDetailData = true;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.movieDetailData = action.payload;
        state.pendingDetailData = false;
      })
      .addCase(getMovieData.rejected, (state, action) => {
        state.error = action.error;
        state.pendingDetailData = false;
      });
  },
});
export default moviesSlice.reducer;
