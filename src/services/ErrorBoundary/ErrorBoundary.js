import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorFound: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      errorFound: true,
    });
    console.log('error: ', error);
    console.log('info: ', info);
  }

  render() {
    const { errorFound } = this.state;
    const { children } = this.props;
    if (errorFound) {
      return <p>Error caught!</p>;
    }
    return children;
  }
}

export default ErrorBoundary;
