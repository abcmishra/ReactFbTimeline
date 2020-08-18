import React from 'react'
import './App.css';
import Post from "./Components/Post/Post"
import Left from "./Left"
import Right from "./Right"

function App() {
  return (
    <div className="main">
      <Left className="item"></Left>
      <Post className="item"></Post>
      <Right className="item"></Right>
    </div>
  )
}

export default App
