import React , { Component } from 'react';
import Switcher from './Switcher'
import BottomNavbar from './BottomNavbar'

class App extends Component {
  render() {
    return (
      <div>
        <Switcher />
        {this.props.children}
        <BottomNavbar />
      </div>
    )
  }
}

export default App;