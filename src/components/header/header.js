import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from '../../pages/home/home.js';
import SignUp from '../../pages/signup/signup';
import LogIn from '../../pages/login/login';
import NewMovie from '../movies/newmovie';
import {logoutApi} from "../../api/api";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      movies: []
    };
  };

  setUser = (user) => {
    this.setState({user: user})
  };

  setMovie = (movie) => {
    const prevMovies = this.state.movies;
    this.setState({movies: {...prevMovies, movie}})
  };

  handleLogout = () => {
    axios
      .post(logoutApi, {}, {headers:{'Authorization': this.state.user.token}})
      .then(response => {
        this.setState({user: null});
        console.log("success", response);
      })
      .catch(error => {
        console.log("error", error.response.statusText);
      });
  };


  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable navbar-light bg-light">
          <NavLink className="navbar-brand justify-content-start" to="/">Movierama</NavLink>
          {this.state.user ?
            <div className="navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">{this.state.user.username}</li>
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
            return <Home user={this.state.user} movies={this.state.movies}/>
          }}/>
          <Route path='/signup' render={() => {
            return <SignUp setUser={this.setUser}/>
          }}/>
          <Route path='/login' render={() => {
            return <LogIn setUser={this.setUser}/>
          }}/>
          <Route path='/newmovie' render={() => {
            return <NewMovie user={this.state.user} setMovie={this.setMovie}/>
          }}/>
        </Switch>
      </div>
    );

  }
}

export default Header;
