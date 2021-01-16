import React, { Component } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { addMovies } from "../actions";

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
  render() {
    const { list } = this.props.store.getState(); // {list: [], favorites: []}
    console.log("RENDER", this.props.store.getState());

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
