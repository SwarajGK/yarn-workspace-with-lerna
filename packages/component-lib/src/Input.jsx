import React from 'react';

export default function Input({ onChange, ...rest }) {
  const onTextChange = (e) => {
    onChange(e.target.value);
  }
  return (
    <input {...rest} onChange={onTextChange} />
  )
}