import React from 'react'
import MassageItem from './MassageItem/MassageItem'
import styles from './Massages.module.scss'

const Massages = ({ massages }) => {
	const postTextRef = React.createRef()

	const postBtnClick = () => {
		const text = postTextRef.current.value
		alert(text)
	}

	return (
		<div className={styles.massages}>
			{massages.map( massage => <MassageItem text={massage.text} key={massage.id} /> )}
			<div>
				<textarea ref={postTextRef}></textarea>
				<button className={styles.postBtn} onClick={postBtnClick}>Отправить</button>
			</div>
		</div>
	)
}

export default Massages