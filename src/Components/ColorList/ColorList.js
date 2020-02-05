import React, { useState, useRef } from 'react';
import styles from './ColorList.module.scss';
import { ColorFontVal } from '../../Func/Func'

const ColorList = () => {
  const [colorList, setColor] = useState([]);
  const colorRef = useRef(null)
  console.log(colorList);

	const setColorValue = (val) => {
		const colorFont = ColorFontVal(val.current.value);
		
		setColor([...colorList, 
			{
				value: val.current.value,
				fontColor: colorFont 
			}
		])
	}

  return (
	<div className={styles.Wrapper}>
		<input ref={colorRef} type="color" name="color"></input>
		<button onClick={() => setColorValue(colorRef)}>
			Set Color Style
		</button>
		{colorList.slice(0).slice(-5).map((item, index) => 
			<div key={index} className={styles.Content} style={{backgroundColor: item.value}}>
				<span className={item.fontColor ? styles.FontColor__black : styles.FontColor__white}>{item.value}</span>
			</div>
		)
		}
	</div>
  );
}

export default ColorList;