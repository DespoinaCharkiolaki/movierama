import React from 'react';
import UserForm from '../../components/userForm'
import { registerApi } from '../../constants';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch(registerApi, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(
        {
          username: data.get('username'),
          password: data.get('password'),
          role: 'USER'
        }),
    }).then(res => res.json())
      .then((j) => {
          console.log(j)
        },
        (error) => {
          this.setState({
            hasError: true,
            error
          });
        })
      .catch();
  }

  render() {
    return (
      <UserForm title="Sign Up" button="Sign Up" />
    );
  }
}

export default SignUp;