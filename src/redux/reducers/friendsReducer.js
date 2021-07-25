const initialState = [
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

const friendsReducer = (state = initialState, action) => {
	return state
}

export default friendsReducer