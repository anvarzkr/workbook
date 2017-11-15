import React, { Component } from 'react';
import '../dist/assets/css/reset.css';
import '../dist/assets/css/style.css';
import scroll_event_initializer from '../dist/assets/js/main.js';
import { Link,  } from 'react-router';
import img from '../dist/assets/images/carr.png';
import TimeLine from './TimeLine';

class FirstPage extends Component {
  constructor (props){
    super(props);

    this.state = {
      currentUser: {},
      work_places: []
    };
  }

  componentDidMount() {
    fetchData(this.callback.bind(this));
  }

  callback() {
    console.log("callback");
    let person_id = this.props.params.person_id;

    if (!authorized) {
      this.props.history.push('/sign_up');
      return;
    }

    var t = this;
    var worker;

    console.log("Person ID: ", person_id);

    if (person_id != undefined) {
      // /person/:person_id
      emp.getEmployee(person_id).then(function(data){
        worker = data;
        t.setState({
          currentUser: {
						address: person_id,
						name: data[0] + ' ' + data[1],
						passport: data[2],
						user_type: 1
					}
        }, function() {
          console.log(currentUser);
        });

        console.log(data);
      });
    } else {
      person_id = currentUser.address;
      console.log("Person ID: ", person_id);

      t.setState({
        currentUser: currentUser
      }, function() {
        console.log(currentUser);
      });
      // root path /
    }

    var workplaces = [];
    emp.getEmployeeHistory(person_id).then(function(data){

      console.log(data);
    });

    this.setState({
      work_places: [
        {
          company_name: 'Альтснаб',
          date_from: 'June 10',
          date_to: 'June 13',
          feedback: 'feedback'
        }
      ]
    });

    scroll_event_initializer();
  }

  render () {
    return (
      <div>
        <header>
  		    <h1>
            Профиль
            <Link to='/offers' style={{['margin-left']: '10px'}} params={{ data: this.state }}>Заявки</Link>
          </h1>
  	    </header>

      	<div className="container-field">
          <div className="row">
              <div className="col-lg-3">

              </div>
              <div className="col-lg-6">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="row">
                                      <div className="col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                          <img className="img-circle img-responsive" src="https://s-media-cache-ak0.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="row">
                                      <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
                                          <div itemScope="" itemType="http://schema.org/Person">
                                              <h2 className="for_name"> <span itemProp="name">{this.state.currentUser.name}</span></h2>
                                              <br/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <TimeLine items={this.state.work_places}/>

      </div>
    );
  }

}
export default FirstPage
