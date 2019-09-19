import React from 'react';
import './button.scss';

const Button = ({ value, handleClick }) => {
  return (
    <div className="button-container">
      <div className="button-wrapper">
        <div className="button-inner">
          <button
            onClick={handleClick}
          >
            {
              value
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Button;
