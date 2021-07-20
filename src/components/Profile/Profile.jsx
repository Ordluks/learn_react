import React from 'react'
import styles from './Profile.module.scss'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostForm from './PostForm/PostForm'
import PostsList from './PostsList/PostsList'

const Profile = ({ profilePage, dispatch }) => {
	const { posts, taxtareaValue } = profilePage

	return (
		<div className={styles.profile}>
			<img className={styles.cover} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='' />
			<ProfileInfo />
			<div>
				My Posts
				<PostForm dispatch={dispatch} taxtareaValue={taxtareaValue} />
				<PostsList posts={posts} />
			</div>
		</div>
	)
}

export default Profile