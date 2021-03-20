import { combineReducers } from 'redux';

import {
  ADD_MOVIES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_SHOW_FAVORITES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from '../actions';

const initialMovieState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

export function movies(state = initialMovieState, action) {
  console.log('MOVIES Reducer');
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FAVORITE:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favorites: filteredArray,
      };
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.val,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default: {
      return state;
    }
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  console.log('SEARCH Reducer');
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
/*
const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState,
};
export function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
*/

// redux inbuilt combineReducers function
export default combineReducers({
  movies,
  search,
});
