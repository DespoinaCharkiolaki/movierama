import React from 'react';

class NewMovie extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8090/api/movies', {
            method: 'POST',
            body: JSON.stringify(
              {
                  title: data.get('title'),
                  description: data.get('description')
              }),
        }).then()
          .catch();
    }

    render() {
        return (
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
        );
    }
}

export default NewMovie;