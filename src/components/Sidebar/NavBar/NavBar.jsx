import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.navigation}>
			<NavLink to='/profile' activeClassName={styles.active}>Профиль</NavLink>
			<NavLink to='/dialogs' activeClassName={styles.active}>Диалоги</NavLink>
			<NavLink to='/news' activeClassName={styles.active}>Новости</NavLink>
			<NavLink to='/Music' activeClassName={styles.active}>Музыка</NavLink>
			<NavLink to='/Settings' activeClassName={styles.active}>Настройки</NavLink>
		</nav>
	)
}

export default NavBar