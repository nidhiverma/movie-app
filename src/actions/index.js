// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_SHOW_FAVORITES = 'SET_SHOW_FAVORITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// action creators
export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies,
  };
};

export const addFavorite = (movie) => {
  return {
    type: 'ADD_FAVORITE',
    movie,
  };
};

export const removeFavorite = (movie) => {
  return {
    type: 'REMOVE_FAVORITE',
    movie,
  };
};

export const setShowFavorites = (val) => {
  return {
    type: 'SET_SHOW_FAVORITES',
    val,
  };
};

export const addMovieToList = (movie) => {
  return {
    type: 'ADD_MOVIE_TO_LIST',
    movie,
  };
};

export const addMovieSearchResult = (movie) => {
  return {
    type: 'ADD_SEARCH_RESULT',
    movie,
  };
};

export const handleMovieSearch = (movie) => {
  const url = `http://www.omdbapi.com/?apikey=386ed358&t=${movie}`;
  return function (dispatch) {
    // api call
    fetch(url)
      .then((response) => response.json())
      .then((movie) => console.log('movie', movie));

    // dispatch an action
    dispatch(addMovieSearchResult(movie));
  };
};
