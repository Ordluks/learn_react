import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.navigation}>
			<NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
			<NavLink to='/dialogs' activeClassName={styles.active}>Dialogs</NavLink>
			<NavLink to='/news' activeClassName={styles.active}>News</NavLink>
			<NavLink to='/Music' activeClassName={styles.active}>Music</NavLink>
			<NavLink to='/Settings' activeClassName={styles.active}>Settings</NavLink>
		</nav>
	)
}

export default NavBar