import React, {Component} from 'react';
import Movie from './movie';

class MovieList extends Component {

  render() {
    const { user, movies, filterByUsername, setVote, revoke } = this.props;
    return (
      movies ?
        <React.Fragment>
          {movies.map(movie => (
            <span key={movie.id}>
                  <Movie
                    filterByUsername={filterByUsername}
                    user={user ? user : null}
                    movie={movie}
                    setVote={setVote}
                    revoke={revoke}
                  />
                </span>
          ))}
        </React.Fragment>
        : null
    )
  }
}

export default MovieList;