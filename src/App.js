import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
const converter = require('number-to-words');
const sa = ["AA", "BB", "CC", "DD", "EE", "FF", "XX", "YYY"];
const time = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isMounted: false
    }
  }
  handlePlaceHolderClick (e) {
    const placeholder = document.getElementById('placeholder');
    const mounted = !this.state.isMounted;
    this.setState({isMounted: mounted})
    if(mounted){
      placeholder.style.background = 'rgba(91,189,144,0.6)';
    } else {
      placeholder.style.background = 'rgba(0, 0, 0, 0.6)';
    }
  }
  handleMouseMove (e) {
    if (!this.state.isMounted) {
      const placeholder = document.getElementById('placeholder');
      placeholder.style.display = 'block';
      placeholder.style.top = e.target.offsetTop+'px';
      placeholder.style.left = e.target.offsetLeft+'px';
      placeholder.style.width = $(e.target).width()+30+'px';
    }
  }
  handleIncrease (e) {
    e.stopPropagation();
    //console.log($('#placeholder').offset().top + $('#placeholder').outerHeight(true));
    const placeholderHeight = $('#placeholder').height() + 100;
    const calHeight = $('#cal').height();
    if(placeholderHeight <= calHeight) {
      $('#placeholder').height(placeholderHeight);
    }
  }
  handleDecrease (e) {
    e.stopPropagation();
    const placeholderHeight = $('#placeholder').height()-100;
    const calHeight = 98;
    if(placeholderHeight >= calHeight) {
      $('#placeholder').height(placeholderHeight);
    }
  }
  render() {
    const len = converter.toWords(16/sa.length);
    return (
      <div className="app-container" id="cal">
        <div id="placeholder" onClick={this.handlePlaceHolderClick.bind(this)}>
          <div onClick={this.handleIncrease.bind(this)}><i className="angle up icon white f20"></i></div>
          <div onClick={this.handleDecrease.bind(this)}><i className="angle down icon white f20"></i></div>
        </div>
        {
          time.map((a,i)=>{
            return (
              <div className="ui grid" key={i}>
                {
                  sa.map((t,x )=>{
                    return (
                      <div key={x} className={`${len} wide column app-grid`} onMouseMove={this.handleMouseMove.bind(this)}>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
