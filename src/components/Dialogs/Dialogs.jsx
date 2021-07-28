import React from 'react'
import styles from './Dialogs.module.scss'

import DialogsList from './DialogsList/DialogsList'
import MassagesContainer from './Massages/MassagesContainer'

const Dialogs = ({ dialogsPage, dispatch }) => {
	const { dialogs, massages, newMassage } = dialogsPage

	return (
		<div className={styles.dialogs}>
			<h1>Диалоги</h1>
			<DialogsList dialogs={dialogs} />
			<MassagesContainer massages={massages} newMassage={newMassage} dispatch={dispatch} />
		</div>
	)
}

export default Dialogs