import React from 'react'
import styles from './PostForm.module.scss'


const PostForm = ({ textChange, onAddBtnClick, newPostText }) => {
	const postTextRef = React.createRef()

	const onInput = () => {
		const text = postTextRef.current.value
		textChange(text)
	}

	return (
		<div className={styles.postForm}>
			<textarea ref={postTextRef} onChange={onInput} value={newPostText} />
			<button className={styles.addPost} onClick={onAddBtnClick}>Добавить</button>
		</div>
	)
}

export default PostForm