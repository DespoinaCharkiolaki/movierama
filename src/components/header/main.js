import React, {Component} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from '../../pages/home/home.js';
import SignUp from '../../pages/signup/signup';
import LogIn from '../../pages/login/login';
import PublishMovie from '../../pages/publishMovie/publishMovie';
import {getMoviesApi, logoutApi} from "../../api/api";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      sortBy: 'DATE',
      publishedBy: null,
      pageNumber: 0,
      isLoaded: false,
      error: null,
      lastPageNumber: null
    };
  };

  //Login & Register User functionality
  setUser = (user) => {
    this.setState({user: user})
  };

  //Logout User functionality
  handleLogout = () => {
    axios
      .post(logoutApi, {}, {headers: {'Authorization': this.state.user.token}})
      .then(response => {
        this.setState({user: null});
        console.log("success", response);
      })
      .catch(error => {
        console.log("error", error.response.statusText);
      });
  };

  //Cast Vote functionality
  setVote = (vote, movieId) => {
    axios
      .post(`/api/movies/${movieId}/vote`,
        {voteType: vote},
        {headers: {'Authorization': this.state.user.token}}
      )
      .then(response => {
        const user = this.state.user;
        const addVote = true;
        let isMovieLiked;

        if (vote === 'UPVOTE') {
          isMovieLiked = true;
          const likes = user.likes.concat(movieId);
          const movies = this.state.movies.map((movie) => {
            return this.editMovieVote(movieId, movie, isMovieLiked, addVote)
          });

          this.setState(prevState => ({
            user: {...prevState.user, likes},
            movies: movies
          }));
        } else if (vote === 'DOWNVOTE') {
          isMovieLiked = false;
          const dislikes = user.dislikes.concat(movieId);
          const movies = this.state.movies.map((movie) => {
            return this.editMovieVote(movieId, movie, isMovieLiked, addVote)
          });

          this.setState(prevState => ({
            user: {...prevState.user, dislikes},
            movies: movies
          }));
        }
        console.log(response);
      })
      .catch(error => this.addErrorResponseInStateAndLog(error))
  };

  //Revoke Vote functionality
  revoke = (movieId) => {
    axios
      .post(`/api/movies/${movieId}/revoke`,
        {},
        {headers: {'Authorization': this.state.user.token}}
      )
      .then(response => {
        const user = this.state.user;
        const likes = user.likes.filter(like => like !== movieId);
        this.setState(prevState => ({
          user: {...prevState.user, likes}
        }));
        const dislikes = user.dislikes.filter(dislike => dislike !== movieId);
        this.setState(prevState => ({
          user: {...prevState.user, dislikes}
        }));
        //remove vote from movie votes
        const addVote = false;
        let isLiked;
        let movies;
        if (user.likes.includes(movieId)) {
          isLiked = true;
          movies = this.state.movies.map((movie) => {
            return this.editMovieVote(movieId, movie, isLiked, addVote);
          });
        } else {
          isLiked = false;
          movies = this.state.movies.map((movie) => {
            return this.editMovieVote(movieId, movie, isLiked, addVote);
          });
        }
        this.setState({
          movies: movies
        });
        console.log(response);
      })
      .catch(error => this.addErrorResponseInStateAndLog(error))
  };

  //Add New Movie
  setMovie = (movie) => {
    const movies = this.state.movies.concat(movie);
    this.setState({
      movies: movies
    });
  };

  //Get Movies functionality
  getMovies = () => {

    const queryParams = {
      sortingType: this.state.sortBy,
      username: this.state.publishedBy,
      pageNumber: this.state.pageNumber,
    };
    console.log(queryParams);

    axios
      .get(getMoviesApi, {params: queryParams})
      .then(response => {
        let movies;
        if (this.state.pageNumber === 0) {
          movies = response.data.movies;
        } else {
          movies = this.state.movies.concat(response.data.movies);
        }
        this.setState({
          isLoaded: true,
          movies: movies,
          lastPageNumber: response.data.numberOfPages,
        });
        console.log(response);
      })
      .catch(error => this.addErrorResponseInStateAndLog(error))
  };

  setSorting = (sortBy) => {
    this.setState({sortBy: sortBy, pageNumber: 0, publishedBy: null},
      () => this.getMovies());
  };

  filterByUsername = (username) => {
    this.setState({publishedBy: username, pageNumber: 0},
      () => this.getMovies());
  };

  loadMore = () => {
    this.setState({pageNumber: this.state.pageNumber + 1},
      () => this.getMovies());
  };

  editMovieVote(movieId, movie, isLiked, add) {
    if (movie.id === movieId) {
      if (isLiked) {
        movie.likes = add ? movie.likes + 1 : movie.likes - 1;
      } else {
        movie.dislikes = add ? movie.dislikes + 1 : movie.dislikes - 1;
      }
      return movie;
    }
    return movie;
  }

  addErrorResponseInStateAndLog(error) {
    const errorText = error.response.statusText;
    this.setState({error: errorText});
    console.log(errorText);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable navbar-light bg-light">
          <NavLink
            className="navbar-brand justify-content-start"
            to="/"
          >
            Movierama
          </NavLink>
          {this.state.user ?
            <div className="navbar-collapse justify-content-end">
              <span className="navbar-username">
                <h5>Welcome back {this.state.user.username}!</h5>
              </span>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='' className="nav-link">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={this.handleLogout}
                    >
                      Log Out
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/newmovie' className="nav-link">
                    <button className="btn btn-danger">Add New Movie</button>
                  </NavLink>
                </li>
              </ul>
            </div>
            :
            <div className="navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='/login' className="nav-link">
                    <button
                      className="btn btn-primary"
                      type="button"
                    >
                      Log In
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/signup' className="nav-link">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                    >
                      Sign up
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          }
        </nav>
        <Switch>
          <Route exact path='/' render={() => {
            return <Home
              user={this.state.user}
              movies={this.state.movies}
              isLoaded={this.state.isLoaded}
              error={this.state.error}
              lastPageNumber={this.state.lastPageNumber}
              pageNumber={this.state.pageNumber}
              getMovies={this.getMovies}
              setSorting={this.setSorting}
              filterByUsername={this.filterByUsername}
              setVote={this.setVote}
              revoke={this.revoke}
              loadMore={this.loadMore}
            />
          }}/>
          <Route path='/signup' render={() => {
            return <SignUp setUser={this.setUser}/>
          }}/>
          <Route path='/login' render={() => {
            return <LogIn setUser={this.setUser}/>
          }}/>
          <Route path='/newmovie' render={() => {
            return <PublishMovie
              user={this.state.user}
              setMovie={this.setMovie}
            />
          }}/>
        </Switch>
      </div>
    );

  }
}

export default Main;
