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
                            defaultValue="DATE"
                            onChange={(e) => this.props.setSorting(e.target.value)}
                        >
                            <option value="LIKES">Like</option>
                            <option value="DISLIKES">Dislike</option>
                            <option value="DATE">Date</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;