
import React, { Component } from 'react'
import FirstPage from './FirstPage'
class App extends Component{
  render(){
      return (<div>
        <FirstPage emp={this.props.emp}/>
        </div>
      );
  }
}
export default App
