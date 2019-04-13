import React from 'react';

class Vote extends React.Component {

  dislikeMovie = (movie, user) => {
    return this.props.user.dislikes.includes(movie.id);
  };

  likeMovie = (movie, user) => {
    return this.props.user.likes.includes(movie.id);
  };

  render() {
    const { movie, user, setVote, revoke } = this.props;
    return (
      <React.Fragment>
        {user ?
          <React.Fragment>
            {user.username === movie.username 
            ?
            <div className="row">
              <div className="col-12">
                <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
              </div>
            </div>
            :
            <div className="row">
            {movie.likes === 0 && movie.dislikes === 0 
              ?
              <div className="col-6">
                <h6>Be the first to vote for this movie!</h6>
              </div>
              :
              <div className="col-6">
                <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
              </div>
            }
            {this.dislikeMovie(movie, user) || this.likeMovie(movie, user)
            ?
            <div className="col-6 text-right">
              <h6>You have vote this movie</h6>
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => { revoke(movie.id) }}
              >
                Revoke
              </button>
            </div>
            :
            <div className="col-6 text-right">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => { setVote('UPVOTE', movie.id) }}
              >
                <h6>Like</h6>
              </button>
              <span> | </span>
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => { setVote('DOWNVOTE', movie.id) }}
              >
                <h6>Dislike</h6>
              </button>
            </div>
            }
            </div>
          }
         </React.Fragment>
        :
        <div className="row">
          <div className="col-12">
            <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
          </div>
        </div>
        }
      </React.Fragment>
    )
  }
}
      
export default Vote;