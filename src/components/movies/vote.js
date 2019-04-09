import React from 'react';
import USER from '../../mock-user'

class Vote extends React.Component {
    render() {
        if (USER.username === this.props.movie.username
            && this.props.movie.likes === 0
            && this.props.movie.dislikes === 0) {
            return (
                <div className="row">
                    <div className="col-10">
                        <h6>{this.props.movie.likes} Likes | {this.props.movie.dislikes} Dislikes</h6>
                    </div>
                </div>
            )
        }
        else if (this.props.movie.likes === 0
            && this.props.movie.dislikes === 0) {
            return (
                <div className="row">
                    <div className="col-9">
                        <h6>Be the first to vote for this movie! </h6>
                    </div>
                    <div className="col-3">
                        <h6><a href="#">Like</a> | <a href="#">Dislike</a></h6>
                    </div>
                </div>
            )
        }
        else if (USER.username === this.props.movie.username) {
            return (
                <div className="row">
                    <div className="col-10">
                        <h6>{this.props.movie.likes} Likes | {this.props.movie.dislikes} Dislikes</h6>
                    </div>
                </div>
            )
        }
        else if (this.props.movie.likes > 0 || this.props.movie.dislikes > 0) {
            return (
                <div className="row">
                    <div className="col-9">
                        <h6>{this.props.movie.likes} Likes | {this.props.movie.dislikes} Dislikes</h6>
                    </div>
                    <div className="col-3">
                        <h6><a href="#">Like</a> | <a href="#">Dislike</a></h6>
                    </div>
                </div>
            )
        }
        // else if (this.props.movie.id) {
        //     return (
        //         <div className="row">
        //             <div className="col-6">
        //                 <h6>{this.props.movie.likes} Likes | {this.props.movie.dislikes} Dislikes</h6>
        //             </div>
        //             <div className="col-6">
        //                 <h6>You like this movie</h6>
        //                 <a href="#">Dislike</a>
        //             </div>
        //         </div>
        //     )
        // }
        else return null
    }
}

export default Vote;