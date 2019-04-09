import React from 'react';
import Movie from './movie'

class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            movies: []
        };
    }

    componentDidMount(){
        fetch("http://localhost:3001/movies")
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
        if (error) {
          return (
            <div class="alert alert-danger mt-4" role="alert">
              Error: {error.message}
            </div>
          )
        } else if (!isLoaded) {
          return (
            <button class="btn btn-primary btn-lg  mt-4" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
          )
        } else {
          return (
            <React.Fragment>
              {movies.map(movie => (
                <span key={movie.id}>
                  <Movie movie={movie} />
                </span>
              ))}
            </React.Fragment>
          );
        }
    }
}

export default MovieList;