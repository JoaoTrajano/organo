import React from 'react';
import './button.css';

function Button({ type }) {
  return (
    <button className="button" type={type}>
      Criar Card
    </button>
  );
}

export default Button;
