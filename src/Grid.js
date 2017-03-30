import React from 'react';
import $ from "jquery";
const styles = `
.appGrid {
  border: 1px dotted #dfdfdf;
  height:100px;
  position: relative;
  z-index: 99;
}
#placeholder {
  z-index: 200;
  border: 1px solid #dfdfdf;
  height:100px;
  display: none;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
}
.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
  padding: 0px !important;
}
.white {
  color: #fff;
}
.f20 {
  font-size: 20px !important;
}
.f20:hover {
  cursor: pointer;
}`;
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
        <style>{styles}</style>
        <div>
          <div id="placeholder" onClick={this.handlePlaceHolderClick.bind(this)}>
            <i className={`glyphicon glyphicon-chevron-up white f20`} onClick={this.handleIncrease.bind(this)}></i>
            <br/>
            <i className={`glyphicon glyphicon-chevron-down white f20`} onClick={this.handleDecrease.bind(this)}></i>
          </div>
          {
            rows.map((a,i)=>{
              return (
                <div className="row" key={i} style={{display: 'flex'}}>
                  {
                    columns.map((t,x )=>{
                      return (
                        <div key={x} className={`col-lg-${len} appGrid`} onMouseMove={this.handleMouseMove.bind(this)}>
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
