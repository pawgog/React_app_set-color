import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, colorInput, ...props }) => (
  <>
    <button 
      className={colorInput.fontColor === true ? styles.button__black : styles.button__white} 
      style={{backgroundColor: colorInput.value}}
      {...props}
    >
      {children}
    </button>
  </>
);

export default Button;