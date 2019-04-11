import React from 'react';

class Loader extends React.Component {
    render() {
        const label = 'Loading...';
        return (
            <button
                class="btn btn-primary mt-4"
                type="button"
                disabled
            >
                <span 
                    class="spinner-border spinner-border-sm" 
                    role="status" 
                    aria-hidden="true" 
                />
                {label}
            </button>
        );
    }
}

export default Loader;