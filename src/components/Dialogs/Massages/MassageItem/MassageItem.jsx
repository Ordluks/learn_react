import React from 'react'
import styles from './MassageItem.module.scss'

const MassageItem = ({ text }) => {
	return (
		<div className={styles.massage}>
			{text}
		</div>
	)
}

export default MassageItem