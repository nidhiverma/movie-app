// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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
