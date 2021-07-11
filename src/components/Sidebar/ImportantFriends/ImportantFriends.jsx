import React from 'react'
import styles from './ImportantFriends.module.scss'

import ImportantFriendItem from './ImportantFriendItem/ImportantFriendItem'

const ImportantFriends = ({ friends }) => {
	return (
		<div className={styles.importantFriends}>
			{friends.map(friend => <ImportantFriendItem name={friend.name} img={friend.img} key={friend.id} />)}
		</div>
	)
}

export default ImportantFriends