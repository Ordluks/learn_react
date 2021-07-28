const ADD_POST = 'ADD-POST'
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT'


const initialState = {
	posts: [],
	newPostText: 'text'
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: state.posts.length + 1,
				text: state.newPostText,
				likes: 0
			}
		
			state.posts.push(newPost)
			break

		case SET_NEW_POST_TEXT:
			state.newPostText = action.text
			break
	}

	return state
}

export const addPost = () => ({
	type: ADD_POST
})

export const setNewPostText = text => ({
	type: SET_NEW_POST_TEXT,
	text
})

export default profileReducer