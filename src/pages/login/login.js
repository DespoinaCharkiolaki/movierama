import React from 'react';

const LogIn = () => (
    <div className="row  justify-content-center">
        <div className="col-4 log-in">
            <div className="text-center">
                <div className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Log In</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <button className="btn btn-lg btn-primary btn-block  mt-2" type="submit">Log in</button>
                </div>
            </div>
        </div>
    </div>
);

export default LogIn;