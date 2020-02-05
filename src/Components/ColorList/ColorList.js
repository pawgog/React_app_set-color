import React, { useState, useRef } from 'react';
import styles from './ColorList.module.scss';

const ColorList = () => {
  const [color, setColor] = useState([]);
  const colorRef = useRef(null)

  const setColorValue = (val) => {
    setColor([...color, val.current.value])
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
      <input ref={colorRef} type="color" name="color"></input>
      <button onClick={() => setColorValue(colorRef)}>
        Set Color
      </button>
    </div>
  );
}

export default ColorList;