import React, { useState, useRef } from 'react';
import styles from './ColorList.module.scss';
import Button from '../Button/Button'
import { ColorFontVal } from '../../Func/Func'

const ColorList = () => {
	const [colorList, setColor] = useState([]);
	const [colorInput, setColorInput] = useState({
		value: "#000000",
		fontColor: false 
	})
	
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

	const setColorButton = (val) => {
		console.log(val.current.value);
		const colorFont = ColorFontVal(val.current.value);

		setColorInput({
				value: val.current.value,
				fontColor: colorFont 
			})
	}

  return (
	<div className={styles.wrapper}>
		<input className={styles.input} ref={colorRef} onChange={() => setColorButton(colorRef)} type="color" name="color"></input>
		<Button colorInput={colorInput} onClick={() => setColorValue(colorRef)}>
			Set Color Style
		</Button>
		{colorList.slice(0).slice(-5).map((item, index) => 
			<div key={index} className={styles.content} style={{backgroundColor: item.value}}>
				<span className={item.fontColor ? styles.fontColor__black : styles.fontColor__white}>{item.value}</span>
			</div>
		)
		}
	</div>
  );
}

export default ColorList;