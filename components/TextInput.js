import React, { Component } from 'react';
import TextDisplay from './TextDisplay';
import axios from 'axios';
import '../sources/css/reset.css';
import '../sources/css/style.css';
// import '../sources/js/main.js'
// import '../sources/js/modernizr.js'
class TextInput extends Component {

  componentDidMount() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  }

  render () {
      return (<div>
        <header>
  		<h1>Work book</h1>
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
                                      <img className="img-circle img-responsive" src="http://api.adorable.io/avatars/300/abott@adorable.png"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="row">
                                  <div className="centered-text col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                                      <div itemscope="" itemtype="http://schema.org/Person">
                                          <h2> <span itemprop="name">Name</span></h2>
                                          <p><span itemprop="affiliation">Current Company</span></p>
                                          <p>
                                              <i className="fa fa-map-marker"></i> <span itemprop="addressRegion">City</span>
                                          </p>
                                          <p itemprop="email">Mail </p>
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
  				<img src="img/cd-icon-picture.svg" alt="Picture"/>
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
  				<img src="img/cd-icon-movie.svg" alt="Movie"/>
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
  				<img src="img/cd-icon-picture.svg" alt="Picture"/>
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
  				<img src="img/cd-icon-picture.svg" alt="Picture"/>
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
  				<img src="img/cd-icon-location.svg" alt="Location"/>
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
  				<img src="img/cd-icon-location.svg" alt="Location"/>
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
  				<img src="img/cd-icon-movie.svg" alt="Movie"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Final Section</h2>
  				<p>This is the content of the last section</p>
  				<span className="cd-date">Feb 26</span>
  			</div>
  		</div>
  	</section>
      </div>
      );

  }
}
export default TextInput
