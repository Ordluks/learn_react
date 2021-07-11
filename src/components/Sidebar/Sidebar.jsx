import React from 'react'
import styles from './Sidebar.module.scss'

import NavBar from './NavBar/NavBar'
import ImportantFriends from './ImportantFriends/ImportantFriends'

const Sidebar = ({ friends }) => {
	return (
		<div className={styles.sidebar}>
			<NavBar />
			<ImportantFriends friends={friends} />
		</div>
	)
}

export default Sidebar