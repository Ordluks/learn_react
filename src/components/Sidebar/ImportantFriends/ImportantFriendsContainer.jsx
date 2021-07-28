import { connect } from 'react-redux'
import ImportantFriends from './ImportantFriends'


const mapState = (state) => ({
	friends: state.friends
})

const ImportantFriendsContainer = connect(mapState)(ImportantFriends)


export default ImportantFriendsContainer