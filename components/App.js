
import React, { Component } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import Offers from './Offers'
import SignUp from './SignUp'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component{

  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={SignUp} />
        <Route path='/offers' component={Offers} />
        <Route path='/company' component={SecondPage} />
        <Route path='/person' component={FirstPage} />
        <Route path='/person/:person_id' component={FirstPage} />
      </Router>
    );
  }
}
export default App
