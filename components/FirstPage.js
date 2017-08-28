import React, { Component } from 'react';
import '../dist/assets/css/reset.css';
import '../dist/assets/css/style.css';
import scroll_event_initializer from '../dist/assets/js/main.js';
import { Link } from 'react-router';
import img from '../dist/assets/images/carr.png';

class FirstPage extends Component {
  constructor (props){
    super(props);


  }
  componentDidMount() {
    this.setState({
      currentWorker: data.allworkers[0]
    });
    alert(data.lastWork != null && this.state.currentWorker.name === data.lastWork.worker.name);


  }

  showWorker(date, e){
    this.setState({
      currentWorker: date
    });
    if (data.lastWork != null && this.state.currentWorker === data.lastWork.worker)
    this.setState({
      lastWork: data.lastWork
    });
    scroll_event_initializer();
  }

  render () {
    console.log(data.lastWork.worker.name);
    console.log(this.state.currentWorker.name);
    console.log(data.lastWork != null && this.state.currentWorker.name == data.lastWork.worker.name)
    if (data.lastWork != null && this.state.currentWorker.name == data.lastWork.worker.name)
      this.state.lastWork= data.lastWork;
    else {
      this.state.lastWork = null
    }
    // });
      if (this.state.lastWork != null)
      var lastWork = <div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-movie">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>{this.state.lastWork.company}</h2>
  				<p>{this.state.lastWork.review}</p>
  				<span className="cd-date">{this.state.lastWork.date}</span>
  			</div>
  		</div>;
      else
        var lastWork = "";
      const workers = data.allworkers.map((person, index) =>{
        let showWorker = this.showWorker.bind(this, person);

        return <button className="list-group-item" onClick={showWorker} key={index}>{person.name}</button>
      });
      return (<div>
        <header>
  		    <h1>Личный кабинет работника <Link to='/company' params={{ data: this.state }}>Компания</Link></h1> <br/>
  	    </header>

      	<div className="container-field">
          <div className="row">
              <div className="col-lg-3">
                <div className="list-group">
                  {workers}
                </div>
              </div>
              <div className="col-lg-6">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="row">
                                      <div className="col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                          <img className="img-circle img-responsive" src="http://www.freeiconspng.com/uploads/gaben-face-png-27.png"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-12">
                                  <div className="row">
                                      <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
                                          <div itemScope="" itemType="http://schema.org/Person">
                                              <h2 className="for_name"> <span itemProp="name">{this.state.currentWorker.name}</span></h2>
                                              <br/>
                                              <p className="for_name"><span itemProp="affiliation">{this.state.currentWorker.company}</span></p>

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


  	<section id="cd-timeline" className="cd-container">
  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-picture">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 1</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 14</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-movie">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 2</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 18</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-picture">
  			<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 3</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 24</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-picture">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 3</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 27</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-location">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 4</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Feb 14</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-location">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Title of section 5</h2>
  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Mar 20</span>
  			</div>
  		</div>
        {lastWork}

  	</section>


      </div>


      );

  }
}
export default FirstPage
