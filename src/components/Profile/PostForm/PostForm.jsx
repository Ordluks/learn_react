import React from 'react'
import styles from './PostForm.module.scss'

const PostForm = ({ addPost, setPostText, taxtareaValue }) => {
	const postTextRef = React.createRef()

	const onInput = () => {
		const text = postTextRef.current.value
		setPostText(text)
	}

	return (
		<div className={styles.postForm}>
			<textarea ref={postTextRef} onChange={onInput} value={taxtareaValue} />
			<button className={styles.addPost} onClick={addPost}>Добавить</button>
		</div>
	)
}

export default PostForm