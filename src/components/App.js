import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies, setShowFavorites } from "../actions";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED"); // whenever an action is dispatched
      this.forceUpdate();
    });
    // make an api call
    // dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { favorites } = this.props.store.getState().movies;
    const index = favorites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    const { movies } = this.props.store.getState();
    const { list, favorites, showFavorites } = movies; // {list: [], favorites: []}
    console.log("RENDER", this.props.store.getState());

    const displayMovies = showFavorites ? favorites : list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavorite={this.isMovieFavorite(movie)}
                />
              );
            })}
          </div>
          {displayMovies.length === 0 ? (
            <div
              style={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              There are no movies to display.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
