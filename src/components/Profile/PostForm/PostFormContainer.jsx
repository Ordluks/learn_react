import { addPost, setNewPostText } from '../../../mystore/reducers/profileReducer'
import { connect } from 'react-redux'
import PostForm from './PostForm'


const mapState = state => ({
	newPostText: state.profilePage.newPostText
})

const mapDispatch = dispatch => ({
	textChange: text => { dispatch(setNewPostText(text)) },
	onAddBtnClick: () => { dispatch(addPost()) }
})

const PostFormComponent = connect(mapState, mapDispatch)(PostForm)

export default PostFormComponent