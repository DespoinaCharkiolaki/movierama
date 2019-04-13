import React from 'react';
import {addMovieApi} from '../../api/api';
import axios from "axios";
import {Redirect} from "react-router-dom";
import Alert from '..//alert';

class NewMovie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitSuccessful: false,
      error: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': this.props.user.token
    };

      axios
      .post(addMovieApi, {
        title: data.get('title'),
        description: data.get('description')
      },
      { headers: headers }
      )
      .then(response => {
        this.props.setMovie(response.data);
        this.setState({
            error: null,
            submitSuccessful: true
        });
        console.log("success", response);
      })
      .catch(error => {
        this.setState({error: error.response.statusText});
        console.log("error", error.response.statusText);
      });
  }

  render() {
   const error = this.state.error;
    return (
      <React.Fragment>
        {error && <Alert error={error} />}
          <div className="row justify-content-center">
            <div className="col-8 new-movie">
              <h1 className="h3 mb-3 font-weight-normal">Add New Movie</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    className="form-control"
                    rows="3"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Publish</button>
              </form>
            </div>
          </div>
          {this.state.submitSuccessful && <Redirect to='/'/>}
       </React.Fragment>
    );
  }
}

export default NewMovie;