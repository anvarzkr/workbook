import React from 'react';

export default class TileLine extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    let items = this.props.items.map(function(item, index) {
      return (
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
            <img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
          </div>

          <div className="cd-timeline-content">
            <h2>{item.company_name}</h2>
            <p>{item.feedback}</p>
            <span className="cd-date">{item.date_from} - {item.date_to}</span>
          </div>
        </div>
      );
    })

    return (
      <section id="cd-timeline" className="cd-container">
        {items}
    	</section>
    );
  }

}
