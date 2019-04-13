import React, {Component} from 'react';
import Movie from './movie';

class MovieList extends Component {

  render() {
    const {user, movies} = this.props;
    return (
      movies ?
        <React.Fragment>
          {movies.map(movie => (
            <span key={movie.id}>
                  <Movie
                    user={user ? user : null}
                    movie={movie}
                  />
                </span>
          ))}
        </React.Fragment>
        : null
    )
  }
}

export default MovieList;