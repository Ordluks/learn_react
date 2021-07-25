const ADD_MASSAGE = 'ADD-MASSAGE'
const SET_NEW_MSG_TEXT = 'SET-NEW-MSG-TEXT'


const initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Вася'
		},
		{
			id: 2,
			name: 'Петя'
		},
		{
			id: 3,
			name: 'Коля'
		}
	],
	massages: [
		{
			id: 1,
			text: 'Hi'
		},
		{
			id: 2,
			text: 'Hellow'
		},
		{
			id: 3,
			text: 'How are you?'
		}
	],
	newMassageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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