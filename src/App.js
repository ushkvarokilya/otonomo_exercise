import React, { Component } from 'react'
import Controls from './components/Controls'
import StreamersList from './components/CarDataList'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
        <StreamersList />
        <Controls />
      </div>
    )
  }
}

export default App
