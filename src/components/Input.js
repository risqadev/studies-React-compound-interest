import React from 'react';
import { useRef } from 'react';

export default function Input({ id, description, type, value, minimumValue, maximumValue, onChange, step }) {
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    onChange(event);
  }

  return (
    <div className="col s6 m4">
      <label htmlFor={id}>{description}</label>
      <input ref={inputRef} id={id} type={type} value={value} onChange={handleInputChange} step={step} min={minimumValue} max={maximumValue} />
    </div>
  )
}
