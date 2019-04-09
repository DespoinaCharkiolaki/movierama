import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sort">
                <h1 className="h3 mb-3 font-weight-normal">Sort By</h1>
                <div className="col-12 p-0">
                    <div className="form-inline">
                        <select 
                            className="browser-default custom-select col-12"
                            onChange={this.props.onInputChange}
                        >
                            <option selected>Select</option>
                            <option value="1">Like</option>
                            <option value="2">Dislike</option>
                            <option value="3">Date</option>
                        </select>
                        <button 
                            onClick={this.props.onSearch} 
                            className="btn btn-primary col-12 mt-2"
                        >
                            Sort
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;