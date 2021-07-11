import React from 'react'
import styles from './DialogsList.module.scss'

import DialogItem from './DialogItem/DialogItem'

const DialogsList = ({ dialogs }) => {
	return (
		<div className={styles.dialogsList}>
			{dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> )}
		</div>
	)
}

export default DialogsList