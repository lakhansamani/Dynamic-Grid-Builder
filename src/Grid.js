import React from 'react';
import $ from "jquery";
class Grid extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isMounted: false
    }
  }
  handlePlaceHolderClick (e) {
    const placeholder = $('#placeholder');
    const mounted = !this.state.isMounted;
    this.setState({isMounted: mounted})
    if(mounted){
      placeholder.css({background:'rgba(91,189,144,0.6)'});
    } else {
      placeholder.css({background: 'rgba(0, 0, 0, 0.6)'});
    }
  }
  handleMouseMove (e) {
    if (!this.state.isMounted) {
      const placeholder = $('#placeholder');
      placeholder.css({
        display: 'block',
        left: $(e.target).offset().left+'px',
        top: $(e.target).offset().top+'px',
        width: $(e.target).width()+1+'px',
      });
    }
  }
  handleIncrease (e) {
    e.stopPropagation();
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
  render () {
    const rows = this.props.rows || [1,2,3,4,5,6];
    const columns = this.props.columns || [1,2,3,4,5,6];
    const len = Math.ceil(12/columns.length);
    return (
      <div>
        <div>
          <div id="placeholder" onClick={this.handlePlaceHolderClick.bind(this)}>
            <i className="glyphicon glyphicon-chevron-up white f20" onClick={this.handleIncrease.bind(this)}></i>
            <br/>
            <i className="glyphicon glyphicon-chevron-down white f20" onClick={this.handleDecrease.bind(this)}></i>
          </div>
          {
            rows.map((a,i)=>{
              return (
                <div className="row" key={i} style={{display: 'flex'}}>
                  {
                    columns.map((t,x )=>{
                      return (
                        <div key={x} className={`col-lg-${len} app-grid`} onMouseMove={this.handleMouseMove.bind(this)}>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
module.exports = Grid;
