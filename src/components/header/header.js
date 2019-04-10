import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../../pages/home/home.js';
import SignUp from '../../pages/signup/signup';
import LogIn from '../../pages/login/login';
import USER from '../../mock-user'
import NewMovie from '../movies/newmovie'

const Header = () => (
    <div>
        <nav className="navbar navbar-toggleable navbar-light bg-light">
            <NavLink className="navbar-brand justify-content-start" to="/">Movierama</NavLink>
            {!USER ?
            <div className="navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='' className="nav-link">
                            <button className="btn btn-primary" type="button">Log Out</button>
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
                        <NavLink to='/login' className="nav-link" >
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
                return <Home />
            }} />
            <Route path='/signup' render={() => {
                return <SignUp />
            }} />
            <Route path='/login' render={() => {
                return <LogIn />
            }} />
            <Route path='/newmovie' render={() => {
                return <NewMovie />
            }} />
        </Switch>
    </div>
);

export default Header;
