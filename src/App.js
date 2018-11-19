import React, { Component } from 'react';
import UserOutput from './Components/UserOutput'
import UserInput from './Components/UserInput'

class App extends Component {

  state = {
    userName: 'Mark'
  }

  setUserName = newName => {
    this.setState({ userName: 'Mark'})
  }

  onChangedHandler = event => {
    this.setState({ userName: event.target.value})
  }

  render() {

    // it goes as an object
    const style = {
      'color':'#444',
      'border': '2px solid #999',
      'width': '200px',
      'text-align': 'center'
    }

    return (
      <React.Fragment>
        <UserInput
          changed={this.onChangedHandler.bind(this)}
          initialValue={this.state.userName}
        />
        <UserOutput style={style} >{this.state.userName}</UserOutput>
        <UserOutput>I</UserOutput>
        <UserOutput>do</UserOutput>
        <UserOutput />
      </React.Fragment>
    )
  }
}

export default App;
