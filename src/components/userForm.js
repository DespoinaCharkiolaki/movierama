import React from 'react';
import Alert from "./alert";

class UserForm extends React.Component {
  render() {
    const title = this.props.title;
    const button = this.props.button;
    return (
      <div className="row justify-content-center">
        <div className="col-4 sign-up">
          <div className="text-center">
            <form className="form-signin" onSubmit={this.props.action}>
              <h1 className="h3 mb-3 font-weight-normal">{title}</h1>
              <label htmlFor="username" className="sr-only">Username</label>
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
              <button className="btn btn-lg btn-primary btn-block mt-2" type="submit">{button}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserForm;