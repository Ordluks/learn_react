import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className='header'>
			<NavLink to='/'><img className={styles.logo} src='https://cryptologos.cc/logos/aave-aave-logo.png' alt='Site Logo' /></NavLink>
		</header>
	)
}

export default Header