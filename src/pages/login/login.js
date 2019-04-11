import React from 'react';

class LogIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/login', {
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
      <div className="row  justify-content-center">
        <div className="col-4 log-in">
          <div className="text-center">
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
              <label htmlFor="username" className="sr-only">Email address</label>
              <input
                id="username"
                name="username"
                className="form-control"
                placeholder="Username"
                type="text"
                required
              />
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
                type="password"
                required
              />
              <button className="btn btn-lg btn-primary btn-block  mt-2" type="submit">Log in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;