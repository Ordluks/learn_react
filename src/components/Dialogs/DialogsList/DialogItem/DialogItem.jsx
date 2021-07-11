import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './DialogItem.module.scss'

const DialogItem = ({ name, id }) => {
	return (
		<NavLink to={'/dialogs/' + id} className={styles.item}>
			{name}
		</NavLink>
	)

}

export default DialogItem