import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            id: null,
            first_name: '',
            last_name: '',
            email: ''
        };
    }

    register(){
        const axios = require('axios');
        axios.post("http://localhost:3002/users", {
                    id: null,
                    first_name: 'Spyros',
                    last_name: 'A',
                    email: 'spyros@test.com'
            }).then(resp => {
                console.log(resp.data);
            }).catch(error => {
                console.log(error);
            }); 
        }

    render() {
        return (
            <div className="row  justify-content-center">
                <div className="col-4 sign-up">
                    <div className="text-center">
                        <div className="form-signin">
                            <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                            <label htmlFor="inputName" className="sr-only">username</label>
                            <input type="text"
                                id="inputName"
                                className="form-control"
                                placeholder="username"
                            />
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input 
                                type="email" 
                                id="inputEmail" 
                                className="form-control" 
                                placeholder="Email address" 
                            />
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input 
                                type="password" 
                                id="inputPassword" 
                                className="form-control" 
                                placeholder="Password" 
                            />
                            <button className="btn btn-lg btn-primary btn-block mt-2" type="button" onClick={this.register}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;