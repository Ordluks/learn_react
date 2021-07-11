import React from 'react'
import styles from './ImportantFriendItem.module.scss'

const ImportantFriendItem = ({ name, img }) => {
	return (
		<div className={styles.item}>
			<img className={styles.profImg} src={img} />
			<span className={styles.name}>{name}</span>
		</div>
	)
}

export default ImportantFriendItem