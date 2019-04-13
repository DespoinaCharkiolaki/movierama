import React from 'react';

class Alert extends React.Component {
    render() {
        const error = this.props.error;
        return (
            <div className="row justify-content-center">
                <div className="col-10 alert alert-danger mt-4" role="alert">
                    {error}
                </div>
            </div>
        );
    }
}
export default Alert;