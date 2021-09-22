import React from 'react';
import { Link } from 'react-router-dom';

class ReturnButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img
            width="40px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS97Ebf7j7tVXfBfCecWctHDbp7UVJRQBdDhIQtrTJHbnXFugi_UsZ-aPE5TGVDYO3ZkM&usqp=CAU"
            alt="return"
          />
        </Link>
      </div>
    );
  }
}

export default ReturnButton;
