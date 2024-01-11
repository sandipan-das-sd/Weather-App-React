import React, { Component } from 'react'
import Header  from './Header'
import Home from './Home'
import Weather from './Weather';
export class App extends Component {
  render() {
    return (
      <div className='container-fluid p-0'>
        <Header/>
        <Home/>
        <Weather/>
      </div>
    )
  }
}

export default App
