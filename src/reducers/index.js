import {
  ADD_MOVIES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_SHOW_FAVORITES,
} from "../actions";

const initialMovieState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

export default function movies(state = initialMovieState, action) {
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

    default: {
      return state;
    }
  }
}
