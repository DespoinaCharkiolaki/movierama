import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from '../../pages/home/home.js';
import SignUp from '../../pages/signup/signup';
import LogIn from '../../pages/login/login';
import NewMovie from '../movies/newmovie';
import { logoutApi } from "../../api/api";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      movies: [],
      error: null
    };
  };

  setUser = (user) => {
    this.setState({ user: user })
  };

  setMovie = (movie) => {
    const prevMovies = this.state.movies;
    this.setState({ movies: { ...prevMovies, movie } })
  };

  handleLogout = () => {
    axios
      .post(logoutApi, {}, { headers: { 'Authorization': this.state.user.token } })
      .then(response => {
        this.setState({ user: null });
        console.log("success", response);
      })
      .catch(error => {
        console.log("error", error.response.statusText);
      });
  };

  setVote = (vote, movieId) => {
      axios
        .post(`/api/movies/${movieId}/vote`,
          { voteType: vote },
          { headers: { 'Authorization': this.state.user.token } }
        )
        .then(response => {
          if (vote === 'UPVOTE'){
          this.setState(prevState => ({
             user: {...prevState.user.likes, movieId}
           }));
           }else {
            this.setState(prevState => ({
               user: {...prevState.user.dislikes, movieId}
             }));
           }
          console.log(response);
        })
        .catch(error => {
          const errorText = error.response.statusText;
          this.setState({ error: errorText });
          console.log(errorText);
        })
    };

      revoke = (movieId) => {
        axios
          .post(`/api/movies/${movieId}/revoke`,
            {},
            { headers: { 'Authorization': this.state.user.token } }
          )
          .then(response => {
                this.setState(prevState => ({
                  user: {...prevState.user.likes.filter(like => like !== movieId)}
                }));
              this.setState(prevState => ({
                user: {...prevState.user.dislikes.filter(dislike => dislike !== movieId)}
              }));
            console.log(response);
          })
          .catch(error => {
            const errorText = error.response.statusText;
            this.setState({ error: errorText });
            console.log(errorText);
          })
      };


  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable navbar-light bg-light">
          <NavLink className="navbar-brand justify-content-start" to="/">Movierama</NavLink>
          {this.state.user ?
            <div className="navbar-collapse justify-content-end">
              <span className="navbar-username">
                <h5>Welcome back {this.state.user.username}!</h5>
              </span>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='' className="nav-link">
                    <button className="btn btn-primary" type="button" onClick={this.handleLogout}>Log Out</button>
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
                    <button className="btn btn-primary" type="button">Log In</button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/signup' className="nav-link">
                    <button className="btn btn-outline-primary" type="button">Sign up</button>
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
            setVote={this.setVote}
            revoke={this.revoke}
            />
          }} />
          <Route path='/signup' render={() => {
            return <SignUp setUser={this.setUser} />
          }} />
          <Route path='/login' render={() => {
            return <LogIn setUser={this.setUser} />
          }} />
          <Route path='/newmovie' render={() => {
            return <NewMovie user={this.state.user} setMovie={this.setMovie} />
          }} />
        </Switch>
      </div>
    );

  }
}

export default Header;
