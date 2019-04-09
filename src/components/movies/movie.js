import React from 'react';
import USER from '../../mock-user'
import Vote from './vote'
import Moment from 'react-moment';
import 'moment-timezone';

class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <h1 className="h3 mb-3 font-weight-normal">{this.props.movie.title}</h1>
                <h6>Posted by 
                    {USER.username ===  this.props.movie.username
                    ?
                    <a href="#"> You </a> 
                    :
                    <a href="#"> {this.props.movie.username} </a> 
                    }
                    <span> <Moment fromNow>{this.props.movie.date}</Moment></span>
                </h6>
                <p>{this.props.movie.description}</p>
                <Vote movie={this.props.movie} />
            </div> 
        );
    }
}

export default Movie;