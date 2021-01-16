import React, { Component } from "react";
import { addFavorite, removeFavorite } from "../actions";

export default class MovieCard extends Component {
  handleFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  };

  handleRemoveFavoriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavorite(movie));
  };

  render() {
    const { movie, isFavorite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavorite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleRemoveFavoriteClick}
              >
                Remove From Favorites
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavoriteClick}
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
