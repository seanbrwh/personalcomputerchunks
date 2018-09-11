import React, { Component } from 'react'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <div>        
        <Header/>
        {routes}
        <Footer/>              
      </div>
    )
  }
}

export default App
