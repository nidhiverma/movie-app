import React, { Component } from 'react';
import { addMovieToList, handleMovieSearch } from '../actions/index';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { result, showSearchResults } = this.props.search;
    console.log('Title', result.Title);
    return (
      /* prettier-ignore */
      <div className='nav'>
        <div className='search-container'>
          <input onChange={(e) => this.handleChange(e)} />
          <button id='search-btn' onClick={this.handleSearch}> Search </button>

          {showSearchResults && (
            <div className='search-results'>
              <div className='search-result'>
                <img src={result.Poster} alt='movie poster' />
                
                <div className='movie-info'>
                  <span> {result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
