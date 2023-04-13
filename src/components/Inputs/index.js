import React from 'react';
import './input.css';

export function Input({
  typeText, label, placeHolder, handleValue,
}) {
  return (
    <div className="content">
      <label htmlFor={label}>{label}</label>
      <input
        className="style-input"
        type={typeText !== '' && typeText}
        placeholder={placeHolder}
        onChange={(e) => handleValue(e.target.value)}
      />
    </div>
  );
}

export function Select({ label, listOptions, handleValue }) {
  return (
    <div className="content">
      <label htmlFor={label}>{label}</label>
      <select className="style-input" onChange={(e) => handleValue(e.target.value)}>
        <option>Selecione</option>
        {
          listOptions.map((option, key) => <option key={option} value={key}>{option}</option>)
        }
      </select>
    </div>
  );
}
