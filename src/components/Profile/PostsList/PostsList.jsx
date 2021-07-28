import React from 'react'
import styles from './PostsList.module.scss'
import Post from './Post/Post'


const PostsList = ({ posts }) => {
	return (
		<div className='posts'>
			{posts.map( post => <Post name='Вова' msg={post.text} likesCount={post.likes} key={post.id} />)}
		</div>
	)
}

export default PostsList