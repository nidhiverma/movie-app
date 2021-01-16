import React, { Component } from "react";
import { addFavorite } from "../actions";

export default class MovieCard extends Component {
  handleAddFavorite = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  };
  render() {
    const { movie } = this.props;
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
            <button className="favourite-btn" onClick={this.handleAddFavorite}>
              Favorite
            </button>
          </div>
        </div>
      </div>
    );
  }
}
