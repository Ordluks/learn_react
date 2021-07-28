import React from 'react'
import styles from './Profile.module.scss'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostFormContainer from './PostForm/PostFormContainer'
import PostsListContainer from './PostsList/PostsListContainer'

const Profile = () => {
	return (
		<div className={styles.profile}>
			<img className={styles.cover} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='' />
			<ProfileInfo />
			<div>
				My Posts
				<PostFormContainer />
				<PostsListContainer />
			</div>
		</div>
	)
}

export default Profile