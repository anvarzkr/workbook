import React, { Component } from 'react'
import '../dist/assets/css/company.css';

class SecondPage extends Component{
  constructor(props) {
    super(props);
    this.showWorkers = this.showWorkers.bind(this);
    this.showCandidate = this.showCandidate.bind(this);
  }

  showWorkers() {
    $("#add_users_collapse").collapse('hide');
    $("#users_collapse").collapse('show');
  }

  showCandidate() {
    $("#users_collapse").collapse('hide');
    $("#add_users_collapse").collapse('show');
  }

  render () {
    return(
      <div>
      <header>

        <h1 className="second_page" >Hikester</h1>
        <h2>Компания создавшая лучшее приложение по менеджменту мероприятий.</h2>
      </header>
    <div className="container second_page">


      <div className="row">
        <div className="col-md-10 col-md-offset-1 text-center">

              <button id="users" type="button" onClick={this.showWorkers} className="btn btn-primary btn-circle btn-xl my_btn" >
                <i className="glyphicon glyphicon-user"></i>
              </button>

              <button id="add_user_btn" type="button" onClick={this.showCandidate} className="btn btn-success btn-circle btn-xl my_btn" >
                <i className="glyphicon glyphicon-plus"></i>
              </button>

        <div/>
        <div id="users_collapse" ref="users_collapse" className="collapse in">
          <div className="col-md-8 col-md-offset-2">
              <h3 className="second_page" >Штат</h3>
              <div className="list-group">
                  <a className="list-group-item clearfix" onClick="alert('Action1 -> Details');">
                      Ринат ДЦП Ниязиевич
                      <span className="pull-right">
                          <span className="btn btn-danger btn-circle" onClick="alert('Action1 -> Play'); event.stopPropagation();">
                              <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                          </span>
                      </span>
                  </a>
                  <a className="list-group-item clearfix" onClick="alert('Action2 -> Details');">
                      Action2
                      <span className="pull-right">
                          <span className="btn btn-danger btn-circle" onClick="alert('Action2 -> Play'); event.stopPropagation();">
                              <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
                          </span>
                      </span>
                  </a>
              </div>
          </div>

        </div>

        <div id="add_users_collapse" ref="add_users_collapse" className="collapse">
          <div className="col-md-8 col-md-offset-2">
              <h3 className="second_page" >Кандидаты</h3>
              <div className="list-group">
                  <a className="list-group-item clearfix" onClick="alert('Action1 -> Details');">
                      Ринат Крутит Спиннер Гумаров
                      <span className="pull-right">
                          <span className="btn btn-success btn-circle" onClick="alert('Action1 -> Play'); event.stopPropagation();">
                              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                          </span>
                      </span>
                  </a>
                  <a className="list-group-item clearfix" onClick="alert('Action2 -> Details');">
                      Action2
                      <span className="pull-right">
                          <span className="btn btn-success btn-circle" onClick="alert('Action2 -> Play'); event.stopPropagation();">
                              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                          </span>
                      </span>
                  </a>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>);}
}
export default SecondPage
