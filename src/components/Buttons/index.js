import React from 'react';
import './button.css';

function Button({ type, ...props }) {
  return (
    <button className="button" type={type}>
      {props.children}
    </button>
  );
}

export default Button;
