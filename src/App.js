import React, { Component } from 'react'
import routes from './routes'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <div>        
        <Header/>
        {routes}              
      </div>
    )
  }
}

export default App
