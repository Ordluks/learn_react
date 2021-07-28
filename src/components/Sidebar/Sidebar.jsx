import React from 'react'
import styles from './Sidebar.module.scss'

import NavBar from './NavBar/NavBar'
import ImportantFriendsContainer from './ImportantFriends/ImportantFriendsContainer'

const Sidebar = ({ friends }) => {
	return (
		<div className={styles.sidebar}>
			<div>
				<h2>Навигация</h2>
				<NavBar />
			</div>
			<div>
				<h2>Друзья</h2>
				<ImportantFriendsContainer />
			</div>
			
		</div>
	)
}

export default Sidebar