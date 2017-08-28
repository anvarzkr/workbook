
import React, { Component } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component{

  render(){
<<<<<<< HEAD
      return (<div>
        <FirstPage emp={this.props.emp}/>
        </div>
=======
      return (
        <Router history={browserHistory}>
        <Route path='/' component={FirstPage} />
        <Route path='/company' component={SecondPage} />
      </Router>
>>>>>>> very_bad_kostyl
      );
  }
}
export default App
