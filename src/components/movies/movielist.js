import React from 'react';
import Movie from './movie';
import Alert from '../alert';
import Loader from '../loader';
import { getMoviesApi } from '../../constants';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    fetch(getMoviesApi)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            movies: result.movies
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    return (
      !isLoaded ?
        <Loader />
        : error ?
          <Alert error={this.state.error} />
          : movies ?
            <React.Fragment>
              {movies.map(movie => (
                <span key={movie.id}>
                  <Movie movie={movie} />
                </span>
              ))}
            </React.Fragment>
            : null
    )
  }
}

export default MovieList;