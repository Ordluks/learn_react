import React from 'react'
import MassageItem from './MassageItem/MassageItem'
import styles from './Massages.module.scss'
import { addMassage, setNewMassageText } from '../../../mystore/reducers/dialogsReducer'

const Massages = ({ textChange, postBtnClick, massages, newMassage }) => {
	const postTextRef = React.createRef()

	const onInput = () => {
		const text = postTextRef.current.value
		textChange(text)
	}

	return (
		<div className={styles.massages}>
			{massages.map( massage => <MassageItem text={massage.text} key={massage.id} /> )}
			<div>
				<textarea ref={postTextRef} onChange={onInput}>{newMassage}</textarea>
				<button className={styles.postBtn} onClick={postBtnClick}>Отправить</button>
			</div>
		</div>
	)
}

export default Massages