import React from 'react'
import styles from './PostForm.module.scss'
import { addPost, setNewPostText } from '../../../redux/state'

const PostForm = ({ dispatch, taxtareaValue }) => {
	const postTextRef = React.createRef()

	const onInput = () => {
		const text = postTextRef.current.value
		dispatch(setNewPostText(text))
	}

	const onAddBtnClick = () => {
		dispatch(addPost())
	}

	return (
		<div className={styles.postForm}>
			<textarea ref={postTextRef} onChange={onInput} value={taxtareaValue} />
			<button className={styles.addPost} onClick={onAddBtnClick}>Добавить</button>
		</div>
	)
}

export default PostForm