import React from 'react'
import styles from './PostForm.module.scss'

const PostForm = ({ addPost }) => {
	const postTextRef = React.createRef()

	const onAddClick = () => {
		let text = postTextRef.current.value
		addPost(text)
	}

	return (
		<div className={styles.postForm}>
			<textarea ref={postTextRef}></textarea>
			<button className={styles.addPost} onClick={onAddClick}>Добавить</button>
		</div>
	)
}

export default PostForm