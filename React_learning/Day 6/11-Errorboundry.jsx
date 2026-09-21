import React from "react";

class ErrorBoundary extends React.Component {

    state = { error: false };

    static getDerivedStateFromError() {
        return { error: true };
    }

    render() {
        if (this.state.error) {
            return <h2>Something went wrong!</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;