// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SET_SHOW_FAVORITES = "SET_SHOW_FAVORITES";

// action creators
export const addMovies = (movies) => {
  return {
    type: "ADD_MOVIES",
    movies,
  };
};

export const addFavorite = (movie) => {
  return {
    type: "ADD_FAVORITE",
    movie,
  };
};

export const removeFavorite = (movie) => {
  return {
    type: "REMOVE_FAVORITE",
    movie,
  };
};

export const setShowFavorites = (val) => {
  return {
    type: "SET_SHOW_FAVORITES",
    val,
  };
};
