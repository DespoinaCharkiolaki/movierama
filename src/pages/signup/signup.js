import React from 'react';
import UserForm from '../../components/userForm'
import {registerApi} from '../../api/api';
import axios from "axios";
import {Redirect} from "react-router-dom";
import Alert from '../../components/alert'

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registrationSuccessful: false,
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios
      .post(registerApi, {username: data.get('username'), password: data.get('password'), role: 'USER'})
      .then(response => {
        this.props.setUser(response.data);
        this.setState({error: null, registrationSuccessful: true});
        console.log("success", response);
      })
      .catch(error => {
        this.setState({error: error.response.statusText});
        console.log("error", error.response.statusText);
      });
  }

  render() {
    const error=this.state.error;
    return (
      <React.Fragment>
        {error && <Alert error={error} />}
        <UserForm title="Sign Up" button="Sign Up" action={this.handleSubmit}/>
        {this.state.registrationSuccessful && <Redirect to='/'/>}
      </React.Fragment>
    );
  }
}

export default SignUp;