const ADD_POST = 'ADD-POST'
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT'
const ADD_MASSAGE = 'ADD-MASSAGE'
const SET_NEW_MSG_TEXT = 'SET-NEW-MSG-TEXT'

const store = {
	__state: {
		profilePage: {
			taxtareaValue: '',
			posts: [
				{
					id: 1,
					text: 'Привет, народ',
					likes: 10
				},
				{
					id: 2,
					text: 'Lol',
					likes: 2
				}
			]
		},
		dialogsPage: {
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
			newMassageText: 'test',
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
			]
		},
		friends: [
			{
				id: 1,
				name: 'Вася',
				img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			},
			{
				id: 2,
				name: 'Петя',
				img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			},
			{
				id: 3,
				name: 'Коля',
				img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
			}
		]
	},

	__callSubscriber() {
		console.log('Render function is not defined')
	},

	getState() {
		return this.__state
	},

	subscribe(observer) {
		this.__callSubscriber = observer
	},

	dispatch(action) {
		switch (action.type) {
			case ADD_POST:
				const newPost = {
					id: this.__state.profilePage.posts.length + 1,
					text: this.__state.profilePage.taxtareaValue,
					likes: 0
				}
			
				this.__state.profilePage.posts.push(newPost)
				break

			case SET_NEW_POST_TEXT:
				this.__state.profilePage.taxtareaValue = action.text
				break

			case ADD_MASSAGE:
				const newMassage = {
					id: this.__state.dialogsPage.massages.length + 1,
					text: this.__state.dialogsPage.newMassageText
				}

				this.__state.dialogsPage.massages.push(newMassage)
				break
			
			case SET_NEW_MSG_TEXT:
				this.__state.dialogsPage.newMassageText = action.text
				break
		}

		this.__callSubscriber()
	}
}

export const addPost = () => ({
	type: ADD_POST
})

export const setNewPostText = text => ({
	type: SET_NEW_POST_TEXT,
	text
})

export const addMassage = () => ({
	type: ADD_MASSAGE
})

export const setNewMassageText = text => ({
	type: SET_NEW_MSG_TEXT,
	text
})

export default store