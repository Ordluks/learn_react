import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


export const renderDocument = (state, addPost, setPostText) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} setPostText={setPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}