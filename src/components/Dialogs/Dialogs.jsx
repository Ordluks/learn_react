import React from 'react'
import styles from './Dialogs.module.scss'

import DialogsList from './DialogsList/DialogsList'
import Massages from './Massages/Massages'

const Dialogs = ({ dialogs, massages }) => {
	return (
		<div className={styles.dialogs}>
			<h1>Диалоги</h1>
			<DialogsList dialogs={dialogs} />
			<Massages massages={massages} />
		</div>
	)
}

export default Dialogs