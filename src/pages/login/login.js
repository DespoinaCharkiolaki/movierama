import React, {Component} from 'react';
import UserForm from '../../components/userForm'
import {loginApi} from '../../api/api';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false,
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios
      .post(loginApi, {username: data.get('username'), password: data.get('password')})
      .then(response => {
        this.props.setUser(response.data);
        this.setState({error: null, loginSuccessful: true});
        console.log("success", response);
      })
      .catch(error => {
        this.setState({error: error.response.statusText});
        console.log("error", error.response.statusText);
      });
  }

  render() {
    return (
      <React.Fragment>
        <UserForm title="Login" button="Login" action={this.handleSubmit} error={this.state.error}/>
        {this.state.loginSuccessful && <Redirect to='/'/>}
      </React.Fragment>
    );
  }
}

export default LogIn;