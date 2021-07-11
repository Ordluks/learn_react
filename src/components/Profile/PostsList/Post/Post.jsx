import React from 'react'
import styles from './Post.module.scss'

const Post = ({ name, msg, likesCount }) => {
	return (
		<div className={styles.item}>
			<img className={styles.avatar} src='https://myanimelist.net/images/characters/3/257813.jpg' alt='Avatar' />
			<span className={styles.name}>{name}</span>
			<span className={styles.msg}>{msg}</span>
			<span className={styles.likes}>
				Likes: {likesCount}
			</span>
		</div>
	)
}

export default Post