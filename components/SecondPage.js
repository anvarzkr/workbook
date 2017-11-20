import React, { Component } from 'react'
import '../dist/assets/css/company.css';
import { Link } from 'react-router';
class SecondPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
        currentUser: {},
        candidats: [],
        workers: [],
        new_worker_address: ''
    };
    this.showWorkers = this.showWorkers.bind(this);
    this.showCandidate = this.showCandidate.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addWorker() {
    console.log('New worker address', this.state.new_worker_address);
  }

  componentDidMount() {
    fetchData(this.callback.bind(this));
  }

  callback() {
    if (!authorized) {
      this.props.history.push('/');
      return;
    }

    if (authorized && currentUser.user_type == 0) {
      this.props.history.push('/person');
      return;
    }

    this.setState({
      currentUser: currentUser
    })
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  inputOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showWorkers() {
    $("#add_users_collapse").collapse('hide');
    $("#users_collapse").collapse('show');
  }

  showCandidate() {
    $("#users_collapse").collapse('hide');
    $("#add_users_collapse").collapse('show');
  }

  removeWorker(data, e) {
    var context = this;
    var parts = data.date_begin.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    var date = new Date(parts[2], parts[1]-1, parts[0]);
    var period = (new Date()).getTime() - date.getTime();
    period = period / (60 * 60 * 24 * 30 * 1000);
    var year = parseInt(period / 12);
    var month = parseInt(period % 12);
    var periodStr = ((year > 0) ? (year + " лет ") : "") + (month + " месяцев");

    data.period = periodStr;

    this.setState ({
      data: data,
      inputValue: ""
    });
    $('#myModal').modal('show');
  }

  deleteFromState(data) {
    this.setState({candidats: this.state.candidats.concat([data])})

    var array = this.state.workers;
    var index = array.indexOf(data); // Let's say it's Bob.

    array.splice(index, 1);

    this.setState({
      workers: array
    })
  }

  addCandidate(data, e) {
    this.setState({workers: this.state.workers.concat([data])})
    var array = this.state.candidats;
    var index = array.indexOf(data);

    array.splice(index, 1);

    this.setState({
      candidats: array
    })
  }

  submit(e){
    var review = this.state.inputValue;
    this.deleteFromState(this.state.data);
    $('#myModal').modal('hide');
    data.lastWork = {
      "worker": this.state.data,
      "company": this.state.data.company,
      "review": this.state.inputValue,
      "date": "Aug 29",
    }
    data.workers = this.state.workers;
  }

  render () {
    const candidats = this.state.candidats.map((person, index) => {
      let addPerson = this.addCandidate.bind(this, person);
      return (
        <a className="list-group-item clearfix" key={index}>
          {person.name}
          <span className="pull-right">
            <span className="btn btn-success btn-circle" onClick={addPerson}>
              <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            </span>
          </span>
        </a>
      );
    });

    const workers = this.state.workers.map((person, index) =>{
      let removePerson = this.removeWorker.bind(this, person);

      return (
        <a className="list-group-item clearfix" key={index}>
          {person.name}
          <span className="pull-right">
            <span className="btn btn-danger btn-circle" onClick={removePerson}>
              <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
            </span>
          </span>
        </a>
      );
    });
    // Only do this if items have no stable IDs

    return(
      <div>
        <header>
          <h1 className="second_page" >
            Компания "{this.state.currentUser == undefined ? '' : this.state.currentUser.name}"
          </h1>
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
                      {workers}
                    </div>
                  </div>
                </div>
                <div id="add_users_collapse" ref="add_users_collapse" className="collapse">
                  <div className="col-md-8 col-md-offset-2">
                    <h3 className="second_page" >Пригласить работника</h3>
                    <div>
                      <input type="text" onChange={this.inputOnChange.bind(this)} value={this.state.new_worker_address} name="new_worker_address" placeholder="Адрес работника"/>
                      <button onClick={this.addWorker.bind(this)}>Регистрация</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}
export default SecondPage

// <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
//   <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
//         <h4 className="modal-title" id="myModalLabel" style={{textAlign: "center"}}>Отзыв о работнике</h4>
//       </div>
//       <div className="modal-body">
//         <label className="modal-label">Имя:<span className="modal-name">{this.state.data.name}</span></label>
//         <label className="modal-label">Аддрес трудовой книжки:<span className="modal-name">{this.state.data.id}</span></label>
//         <label className="modal-label">Компания:<span className="modal-name">{this.state.data.company}</span></label>
//         <label className="modal-label">Дата начала работы:<span className="modal-name">{this.state.data.date_begin}</span></label>
//         <label className="modal-label">Стаж работы:<span className="modal-name">{this.state.data.period}</span></label>
//         <br/>
//         <div className="form-group">
//           <label className="modal-label" for="comment">Отзыв:</label>
//           <textarea value={this.state.inputValue} onChange={this.handleChange} className="form-control modal-area" rows="5" id="comment"></textarea>
//         </div>
//       </div>
//       <div className="modal-footer">
//         <button id="modal_cancel" type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//         <button id="modal_submit" type="button" onClick={this.submit} className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
