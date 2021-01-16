import { ADD_MOVIES, ADD_FAVORITE } from "../actions";

const initialMovieState = {
  list: [],
  favorites: [],
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
    default: {
      return state;
    }
  }
}
