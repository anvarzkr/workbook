import React, { Component } from 'react';
import '../dist/assets/css/reset.css';
import '../dist/assets/css/style.css';
import scroll_event_initializer from '../dist/assets/js/main.js';
import { Link } from 'react-router';
import img from '../dist/assets/images/carr.png';

class FirstPage extends Component {
  constructor (props){
    super(props);

<<<<<<< HEAD
	constructor(props) {
		super(props)
		this.props.emp.getEmployee.call("0x01dfbded0c1f7fa09d7a0df1d785ec624f3d4452", {from: "0x01dfbded0c1f7fa09d7a0df1d785ec624f3d4452"})
			.then((result) => console.log(result))
	}

	componentDidMount() {
		scroll_event_initializer();
	}

  	render () {
=======

  }
  componentDidMount() {
    this.setState({
      currentWorker: data.allworkers[0]
    });


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
>>>>>>> very_bad_kostyl
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
                                          <img className="img-circle img-responsive" src="https://s-media-cache-ak0.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"/>
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
  				<h2>Ак барс</h2>
  				<p>Фкультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего специалиста отдела Кредитования малого бизнеса.
За этот период он внимательно и ответственно относился к выполняемой работе. Вдумчиво и со знанием дела подходил к выполнению задания. В своей работе успешно применял полученные в Финансовой Академии при Правительстве РФ знания. Проявил себя дисциплинированным, ответственным работником и за весь срок не получил ни одного замечания. Полученную информацию систематизирует, владеет инструментами анализа. Проявляет инициативу, коммуникабелен, берется за любые задания, четко и в определенные сроки выполняет их. По результатам выполнения отчитывается</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 14</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-movie">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Яндкс</h2>
  				<p>акультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего специалиста отдела Кредитования малого бизнеса.
За этот период он внимательно и ответственно относился к выполняемой работе. Вдумчиво и со знанием дела подходил к выполнению задания. В своей работе успешно применял полученные в Финансовой Академии при Правительстве РФ знания. Проявил себя дисциплинированным, ответственным работником и за весь срок не получил ни одного замечания. Полученную информацию систематизирует, владеет инструментами анализа. Проявляет инициативу, коммуникабелен, берется за любые задания, четко и в определенные сроки выполняет их. По результатам выполнения отчитывается</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 18</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-picture">
  			<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Сбертех</h2>
  				<p>Факультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего специалиста отдела Кредитования малого бизнеса.
За этот период он внимательно и ответственно относился к выполняемой работе. Вдумчиво и со знанием дела подходил к выполнению задания. В своей работе успешно применял полученные в Финансовой Академии при Правительстве РФ знания. Проявил себя дисциплинированным, ответственным работником и за весь срок не получил ни одного замечания. Полученную информацию систематизирует, владеет инструментами анализа. Проявляет инициативу, коммуникабелен, берется за любые задания, четко и в определенные сроки выполняет их. По результатам выполнения отчитывается перед руководителем. Рабочее место организовано правильно.
С сотрудниками Банка поддерживал дружеские отношения, не конфликтен. Легко входит в контакт с людьми, в любой ситуации был уважителен в общении с другими.
Выполняемая работа ему нравится, любит видеть ее результаты. Аккуратен при работе с документами и деньгами. Обладает необходимыми знаниями для выполнения своих должностных обязанностей.
Считаю, что по результатам работы Иванов С.П. можно оценить производственную преддипломную практику на оценку «отлично».</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 24</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-picture">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Мэйл ру</h2>
  				<p>Фкультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего специалиста отдела Кредитования малого бизнеса.
За этот период он внимательно и ответственно</p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Jan 27</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-location">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Гугл</h2>
  				<p>Фкультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего </p>
  				<a href="#0" className="cd-read-more">Read more</a>
  				<span className="cd-date">Feb 14</span>
  			</div>
  		</div>

  		<div className="cd-timeline-block">
  			<div className="cd-timeline-img cd-location">
  				<img src="https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-13-128.png" alt="Picture"/>
  			</div>

  			<div className="cd-timeline-content">
  				<h2>Иннополис</h2>
  				<p>Фкультета открытого образования Финансовой академии при Правительстве РФ
Студент Иванов Сергей Петрович проходил преддипломную производственную практику в ДО «Кутузовский проспект» КБ «ЮНИАСТРУМ БАНК» (ООО), Москва, с 16 января 2009г. по 22 апреля 2009г.
Он исполнял обязанности старшего </p>
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
