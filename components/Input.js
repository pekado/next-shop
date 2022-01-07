import React from 'react';

export default function Input({ type, required, value, onChange }) {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      className='border rounded px-3 my-1 w-80'
      required={required}
    />
  );
}
