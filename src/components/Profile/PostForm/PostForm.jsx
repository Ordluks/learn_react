import React from 'react'
import styles from './PostForm.module.scss'

const PostForm = ({ dispatch, taxtareaValue }) => {
	const postTextRef = React.createRef()

	const onInput = () => {
		const text = postTextRef.current.value
		dispatch({type: 'SET-NEW-POST-TEXT', payload: text})
	}

	const onAddBtnClick = () => {
		dispatch({type: 'ADD-POST'})
	}

	return (
		<div className={styles.postForm}>
			<textarea ref={postTextRef} onChange={onInput} value={taxtareaValue} />
			<button className={styles.addPost} onClick={onAddBtnClick}>Добавить</button>
		</div>
	)
}

export default PostForm