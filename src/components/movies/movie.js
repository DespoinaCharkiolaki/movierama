import React from 'react';
import Vote from './vote'
import Moment from 'react-moment';
import 'moment-timezone';

class Movie extends React.Component {
  render() {
    const movie = this.props.movie;
    const user = this.props.user;
    return (
      <div className="movie">
        <h1 className="h3 mb-3 font-weight-normal">
          {movie.title}
        </h1>
        <h6>Posted by
          {user && user.username === movie.username
            ?
            <a href="#"> You </a>
            :
            <a href="#"> {movie.username} </a>
          }
          <Moment fromNow>{movie.date}</Moment>
        </h6>
        <p>{movie.description}</p>
        <Vote user={user} movie={movie}/>
      </div>
    );
  }
}

export default Movie;