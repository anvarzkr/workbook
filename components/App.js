
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
        <Route path='/' component={FirstPage} />
        <Route path='/offers' component={Offers} />
        <Route path='/company' component={SecondPage} />
        <Route path='/person/:person_id' component={FirstPage} />
        <Route path='/sign_up' component={SignUp} />
      </Router>
    );
  }
}
export default App
