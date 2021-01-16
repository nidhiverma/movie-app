import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED"); // whenever an action is dispatched
    });

    // make an api call
    // dispatch action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("STATE", this.props.store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    console.log("RENDER");

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movies-${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
