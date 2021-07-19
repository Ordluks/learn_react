import { renderDocument } from "../render"

const state = {
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
	],

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
}

export let addPost = (text) => {
	let newPost = {
		id: state.posts.length + 1,
		text: text,
		likes: 0
	}

	state.posts.push(newPost)
	renderDocument(state, addPost)
}

export default state