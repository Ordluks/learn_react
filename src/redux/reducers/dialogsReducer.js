const ADD_MASSAGE = 'ADD-MASSAGE'
const SET_NEW_MSG_TEXT = 'SET-NEW-MSG-TEXT'


const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MASSAGE:
			const newMassage = {
				id: state.massages.length + 1,
				text: state.newMassageText
			}

			state.massages.push(newMassage)
			break
		
		case SET_NEW_MSG_TEXT:
			state.newMassageText = action.text
			break
	}

	return state
}

export const addMassage = () => ({
	type: ADD_MASSAGE
})

export const setNewMassageText = text => ({
	type: SET_NEW_MSG_TEXT,
	text
})

export default dialogsReducer