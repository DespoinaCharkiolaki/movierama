import React from 'react';
import Vote from './vote'
import Moment from 'react-moment';
import 'moment-timezone';

class Movie extends React.Component {
  render() {
    const { movie, user, filterByUsername, setVote, revoke } = this.props;
    return (
      <div className="movie">
        <h1 className="h3 mb-3 font-weight-normal">
          {movie.title}
        </h1>
        <h6>Posted by
          {user && user.username === movie.username
            ?
            <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => {filterByUsername(movie.username)}}
            >
                &nbsp;You&nbsp;
            </button>
            :
            <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => {filterByUsername(movie.username)}}
            >
                &nbsp;{movie.username}&nbsp;
            </button>
          }
          <Moment fromNow>{movie.date}</Moment>
        </h6>
        <p>{movie.description}</p>
        <Vote user={user} movie={movie} setVote={setVote} revoke={revoke}/>
      </div>
    );
  }
}

export default Movie;