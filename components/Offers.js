import React from 'react';
import { Link } from 'react-router';

export default class Offers extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      offers: []
    };
  }

  acceptOffer(e) {
    let person_id = currentUser.address;   
    var t = this;
    var address = $(e.target).data("address");
    console.log(address);
    emp.hireAccept(address,{from: web3.eth.accounts[0], gas: 1400000}).then(function(data){

    }); 
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
    var off = []
    emp.getEmployeeProposals(person_id).then(function(data){ 
      $.each(data, function(index, item){
        emp.companyList(item).then(function(data){
          off.push({name: data[1],address: data[0]});
          t.setState({
            offers: off
          });
          console.log(off)
        });        
      }); 
    });
  }

  render() {
    const offers = this.state.offers.map((offer, index) => {
      return (
        <a className="list-group-item clearfix" key={index}>
          {offer.name}
          <span className="pull-right">
              <span className="btn btn-success btn-circle" data-address={offer.address} onClick={this.acceptOffer.bind(this)}>
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
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
