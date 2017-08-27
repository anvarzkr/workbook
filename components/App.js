import React, { Component } from 'react'
import axios from 'axios';
import TextInput from './TextInput'
class App extends Component{
  render(){
      return (<div>
        <p>Hello from App</p>
        <TextInput/>
        </div>
      );
  }
}
export default App
