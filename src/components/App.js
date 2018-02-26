import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

componentWillMount() {
  $('div').hover(()=>{
    $('h1').addClass('textLight')
    $('body').addClass('bg')
  },()=>{
    $('h1').removeClass('textLight')
    $('body').removeClass('bg')
  })
}

  render() {
    return (
      <div className="container">
        <h1 className="intro">React JS</h1>
      </div>
    );
  }

}

export default App;
