import React from 'react'
import MassageItem from './MassageItem/MassageItem'
import styles from './Massages.module.scss'

const Massages = ({ massages }) => {
	return (
		<div className={styles.massages}>
			{massages.map( massage => <MassageItem text={massage.text} key={massage.id} /> )}
		</div>
	)
}

export default Massages