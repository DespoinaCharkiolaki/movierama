import React, {Component} from 'react';
import Sidebar from '../../components/sidebar/sidebar'
import MovieList from '../../components/movies/movielist';
import {getMoviesApi} from '../../api/api';
import Loader from '../../components/loader';
import Alert from '../../components/alert';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      sortBy: 'DATE',
      publishedBy: null,
      pageNumber: 0,
      isLoaded: false,
      error: null
    };
  }


  getMovies = () => {

    const queryParams = {
      sortingType: this.state.sortBy,
      username: this.state.publishedBy,
      pageNumber: this.state.pageNumber
    };
    console.log(queryParams);

    axios
      .get(getMoviesApi, {params: queryParams})
      .then(response => {
        this.setState({
          isLoaded: true,
          movies: response.data.movies
        });
        console.log(response);
      })
      .catch(error => {
        const errorText = error.response.statusText;
        this.setState({error: errorText});
        console.log(errorText);
      })
  }

  componentDidMount() {
    this.getMovies();
  }

  setSorting = (sortBy) => {
    this.setState({sortBy: sortBy},
      () => this.getMovies());
  };

  loadMore = () => {
    this.setState({pageNumber: this.state.pageNumber + 1},
      () => this.getMovies());
  };

  render() {
    const {movies, isLoaded, error} = this.state;
    const {user} = this.props;
    return (
      <div className="row justify-content-start">
        <div className="col-lg-3 col-md-12">
          <Sidebar setSorting={this.setSorting}/>
        </div>
        <div className="col-lg-6 col-md-12">
          {!isLoaded ?
            <Loader/>
            : error ?
              <Alert error={error}/>
              :
              <MovieList user={user ? user : null} movies={movies}/>
          }
          <button
            className="btn btn-primary mt-4" type="button" onClick={this.loadMore}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
