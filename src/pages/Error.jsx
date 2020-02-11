import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <p style={{ textAlign: 'center' }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default Error;
