import React from 'react';
import USER from '../../mock-user'

class Vote extends React.Component {
    render() {
        const movie = this.props.movie;
        return (
            USER.username === movie.username && movie.likes === 0 && movie.dislikes === 0 ?
                <div className="row">
                    <div className="col-10">
                        <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
                    </div>
                </div>
                : movie.likes === 0 && movie.dislikes === 0 ?
                    <div className="row">
                        <div className="col-9">
                            <h6>Be the first to vote for this movie! </h6>
                        </div>
                        <div className="col-3">
                            <h6><a href="#">Like</a> | <a href="#">Dislike</a></h6>
                        </div>
                    </div>
                    : USER.username === movie.username ?
                        <div className="row">
                            <div className="col-10">
                                <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
                            </div>
                        </div>
                        : movie.likes > 0 || movie.dislikes > 0 ?
                            <div className="row">
                                <div className="col-9">
                                    <h6>{movie.likes} Likes | {movie.dislikes} Dislikes</h6>
                                </div>
                                <div className="col-3">
                                    <h6><a href="#">Like</a> | <a href="#">Dislike</a></h6>
                                </div>
                            </div>
                            : null
        )
    }
}
export default Vote;