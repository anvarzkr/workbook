import React, { Component } from 'react';
import '../dist/assets/css/reset.css';
import '../dist/assets/css/style.css';
import scroll_event_initializer from '../dist/assets/js/main.js';
import { Link } from 'react-router';
import img from '../dist/assets/images/carr.png';

class FirstPage extends Component {

  componentDidMount() {
    scroll_event_initializer();
  }

  render () {
      return (<div>
        <header>
  		<h1>Личный кабинет работника <Link to='/company'>Компания</Link></h1> <br/>
      <h2>Моя трудовая книжка</h2>
  	</header>

  	<div className="container">
      <div className="row">
          <div className=" col-lg-offset-3 col-lg-6">
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
                                  <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                      <div itemScope="" itemType="http://schema.org/Person">
                                          <h2 className="for_name"> <span itemProp="name">Name</span></h2>
                                          <p className="for_name"><span itemProp="affiliation">Current Company</span></p>
                                          <p className="for_name">
                                              <i className="fa fa-map-marker"></i> <span itemProp="addressRegion">City</span>
                                          </p>
                                          <p className="for_name" itemProp="email">Mail </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-12 centered-text">
                              Your Short Bio goes here.
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
  				<span className="cd-date">Feb 18</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-movie">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Final Section</h2>
  				<p>This is the content of the last section</p>
  				<span className="cd-date">Feb 26</span>
  			</div>
  		</div>
  	</section>
    <h2>Скиллы работника</h2>

    <div className="progress">
  <div className="progress-bar" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100">
    <span className="sr-only">70% Complete</span>
  </div>
</div>

      </div>


      );

  }
}
export default FirstPage
