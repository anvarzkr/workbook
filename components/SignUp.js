import React from 'react';
import { Link } from 'react-router';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user_type: '0',
      first_name: '',
      last_name: '',
      passport: '',
      company_name: '',
      reg_number: ''
    };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentDidMount() {
    fetchData(this.callback.bind(this));
  }

  callback() {
    if (authorized) {
      this.props.history.push('/');
      return;
    }
  }

  inputOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signUp() {
    console.log("on click")
    if (this.state.user_type == '0') {
      emp.addEmployee(window.web3.eth.accounts[0], this.state.first_name, this.state.last_name, this.state.passport, {from: web3.eth.accounts[0], gas: 1400000}).then(function(data) {

      console.log('Add client, tx address: ' + data);
      });
    } else {
      emp.addCompany(window.web3.eth.accounts[0], this.state.company_name, this.state.reg_number, {from: web3.eth.accounts[0], gas: 1400000}).then(function(data) {

      console.log('Add client, tx address: ' + data);
      });
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            Регистрация
          </h1>
        </header>

        <div style={{['margin-top']: '20px'}}>
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">

                <h1>Регистрация</h1>
                <br/>

                <div className="form-group">
                  <label>Тип пользователя</label>
                  <select className="form-control" name="user_type" value={this.state.user_type} onChange={this.inputOnChange}>
                    <option value="0">Работник</option>
                    <option value="1">Компания</option>
                  </select>
                </div>
                <br/>

                { this.state.user_type == '0' ?
                  <div>
                    <div className="form-group">
                      <label>Имя</label>
                      <input className="form-control" type="text" name="first_name" value={this.state.first_name} onChange={this.inputOnChange}/>
                    </div>
                    <div className="form-group">
                      <label>Фамилия</label>
                      <input className="form-control" type="text" name="last_name" value={this.state.last_name} onChange={this.inputOnChange}/>
                    </div>
                    <div className="form-group">
                      <label>Паспорт</label>
                      <input className="form-control" type="text" name="passport" value={this.state.passport} onChange={this.inputOnChange}/>
                    </div>
                  </div>
                :
                  <div>
                    <div className="form-group">
                      <label>Название компании</label>
                      <input className="form-control" type="text" name="company_name" value={this.state.company_name} onChange={this.inputOnChange}/>
                    </div>
                    <div className="form-group">
                      <label>Регистрационный номер</label>
                      <input className="form-control" type="text" name="reg_number" value={this.state.reg_number} onChange={this.inputOnChange}/>
                    </div>
                  </div>
                }
                <br/>
                <button onClick={this.signUp}>Регистрация</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
