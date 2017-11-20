import React from 'react';
import { Link } from 'react-router';

export default class Offers extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      offers: []
    };
  }

  addOffer() {

  }

  removeOffer() {

  }

  componentDidMount() {
    fetchData(this.callback.bind(this));
    
  }
  callback() {
    let person_id = currentUser.address;
    if (!authorized) {
      this.props.history.push('/sign_up');
      return;
    }
    var t = this;
    console.log(person_id);
    emp.getEmployeeProposals(person_id).then(function(data){      
      this.setState({
        offers: [
          {company_name: 'Альтснаб'}        
        ]
      });
    });
  }

  render() {
    const offers = this.state.offers.map((offer, index) => {
      return (
        <a className="list-group-item clearfix" key={index}>
          {offer.company_name}
          <span className="pull-right">
              <span className="btn btn-success btn-circle" onClick={this.addOffer.bind(this)}>
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
              </span>
              <span className="btn btn-danger btn-circle" onClick={this.removeOffer.bind(this)}>
                  <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
              </span>
          </span>
        </a>
      );
    });

    return (
      <div>
        <header>
          <h1>
            <Link to='/' style={{['margin-right']: '10px'}} params={{ data: this.state }}>Профиль</Link>
            Заявки
          </h1>
        </header>

        <div style={{['margin-top']: '20px'}}>
          <div className="col-md-8 col-md-offset-2">
            <div className="list-group">
              {offers}
            </div>
          </div>
        </div>

      </div>
    );
  }

}
