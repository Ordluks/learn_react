import dialogsReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'


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

	__subscribers: [],

	__callSubscribers() {
		for (let i = 0; i < this.__subscribers.length; i++) {
			this.__subscribers[i]()
		}
	},

	getState() {
		return this.__state
	},

	subscribe(observer) {
		this.__subscribers.push(observer)
	},

	dispatch(action) {
		this.__state.profilePage = profileReducer(this.__state.profilePage, action)
		this.__state.dialogsPage = dialogsReducer(this.__state.dialogsPage, action)

		this.__callSubscribers()
	}
}

export default store