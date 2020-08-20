import React from 'react';

export default function Input({ id, description, type, value, onChange, step }) {
  const handleInputChange = (event) => {
    onChange(event);
  }

  return (
    <div className="col s6 m4">
      <label htmlFor={id}>{description}</label>
      <input id={id} type={type} value={value} onChange={handleInputChange} step={step} />
    </div>
  )
}
