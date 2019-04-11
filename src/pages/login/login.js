import React from 'react';
import UserForm from '../../components/userForm'
import { loginApi } from '../../constants';

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(loginApi, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(
        {
          username: data.get('username'),
          password: data.get('password')
        }),
    }).then(res => res.json())
      .then(j => {
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
      <UserForm title="Log In" button="Log In" />
    );
  }
}

export default LogIn;