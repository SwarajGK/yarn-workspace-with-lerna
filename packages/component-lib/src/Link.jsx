import React from 'react';
import './style.css';

export default function Link({ children, link, onClick, className }) {
  return (
    <a href={link} onClick={onClick} className={`${className} link`}>
      {children}
    </a>
  )
}