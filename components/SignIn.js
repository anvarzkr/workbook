import React from 'react';
import { Link } from 'react-router';

export default class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };

    this.inputOnChange = this.inputOnChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentWillMount() {

  }

  inputOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signIn() {
    // Sign In
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to='/sign_in' style={{['margin-right']: '10px'}} params={{ data: this.state }}>Логин</Link>
            Регистрация
          </h1>
        </header>

        <div style={{['margin-top']: '20px'}}>
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <div className="panel-body">

                <h1>Вход</h1>
                <br/>

                <div className="form-group">
                  <label>Тип пользователя</label>
                  <select className="form-control" name="user_type" value={this.state.user_type} onChange={this.inputOnChange}>
                    <option value="0">Работник</option>
                    <option value="1">Компания</option>
                  </select>
                </div>
                
                <br/>
                <button onClick={this.state.signIn}>Войти</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
