import React from 'react';

const NewMovie = () => (
    <div className="row justify-content-center">
        <div className="col-8 new-movie">
            <h1 className="h3 mb-3 font-weight-normal">Add New Movie</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" className="form-control" id="inputTitle" aria-describedby="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="textareaDescription">Description</label>
                    <textarea className="form-control" id="textareaDescription" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
);

export default NewMovie;