import React from 'react';

class Alert extends React.Component {
    render() {
        const error = this.props.error;
        return (
            <div 
                class="alert alert-danger mt-4" 
                role="alert"
            >
                {error.message}
            </div>
        );
    }
}
export default Alert;