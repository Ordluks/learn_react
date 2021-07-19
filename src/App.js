import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'


const App = ({ state, addPost }) => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Sidebar friends={state.friends} />
				<div className='mainContent'>
					<Route exact path='/' component={() => {return (<h1>Главная</h1>)}} />
					<Route exact path='/profile' render={ () => <Profile posts={state.posts} addPost={addPost} /> } />
					<Route path='/dialogs' render={ () => <Dialogs dialogs={state.dialogs} massages={state.massages} /> } />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
