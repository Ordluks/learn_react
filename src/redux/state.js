let store = {
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

	getState() {
		return this.__state
	},

	__callSubscriber() {
		console.log('Render function is not defined')
	},

	addPost() {
		const newPost = {
			id: this.__state.profilePage.posts.length + 1,
			text: this.__state.profilePage.taxtareaValue,
			likes: 0
		}
	
		this.__state.profilePage.posts.push(newPost)
		this.__callSubscriber()
	},

	setPostText(text) {
		this.__state.profilePage.taxtareaValue = text
		this.__callSubscriber()
	},

	subscribe(observer) {
		this.__callSubscriber = observer
	}
}

export default store
window.store = store