import React from 'react';

class Loader extends React.Component {
    render() {
        const label = this.props.label;
        return (
            <div className="row justify-content-center">
                <div className="col-10 alert alert-info mt-4" role="alert">
                    {label}
                </div>
            </div>
        );
    }
}

export default Loader;