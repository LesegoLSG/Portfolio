import React from 'react';
import '../Stylesheet/Button.css';

const Button = ({onClick,btnText}) => {
  return (
    <button className="btnStyle" onClick={onClick}>{btnText}</button>
  )
}

export default Button