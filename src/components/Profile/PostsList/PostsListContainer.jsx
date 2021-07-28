import { connect } from 'react-redux'
import PostsList from './PostsList'


const mapState = state => ({
	posts: state.profilePage.posts
})

const PostsListContainer = connect(mapState)(PostsList)


export default PostsListContainer