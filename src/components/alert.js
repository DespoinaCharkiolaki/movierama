import React from 'react';

class Alert extends React.Component {
    render() {
        const error = this.props.error;
        return (
            <div 
                className="alert alert-danger mt-4"
                role="alert"
            >
                {error}
            </div>
        );
    }
}
export default Alert;