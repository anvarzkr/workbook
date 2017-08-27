import React, { Component } from 'react'
import TextDisplay from './TextDisplay'
import axios from 'axios';
// import './java_script/my_javascript.js';
class TextInput extends Component {

  componentDidMount() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  }

  render () {
      return (<div>
          <p >123Ilgix</p>

          <button type="button" className="btn btn-secondary"
          data-container="body" data-toggle="popover" data-placement="right"
          data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on right
          </button>

          </div>
      );

  }
}
export default TextInput
