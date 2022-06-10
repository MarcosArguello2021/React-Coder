import React from 'react';
import { useEffect } from 'react'

export const Contacto = () => {
  
  const handleClick = (e) => {
    e.stopPropagation();
    console.log(e)
  }
  const clicker = (e) => {
    console.log(e)
  }
  useEffect(() => {
    window.addEventListener('click', clicker)
    return () => {
      window.removeEventListener('click', clicker)
    }
  })
  
  return <div className='container' onClick={handleClick}>
    <h2>Contacto</h2>
    <hr />
  </div>;
};