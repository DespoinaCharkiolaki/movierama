import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(
        {
          username: data.get('username'),
          password: data.get('password'),
          role: 'USER'
        }),
    }).then()
      .catch();
  }

  render() {
    return (
      <div className="row  justify-content-center">
        <div className="col-4 sign-up">
          <div className="text-center">
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
              <label htmlFor="username" className="sr-only">username</label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;