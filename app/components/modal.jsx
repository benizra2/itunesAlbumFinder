import React from 'react';

export default class Modal extends React.Component {
  render() {
    return(
      <div id={this.props.imgUrl+"Modal"} className="modal" ref={this.props.imgUrl+"Modal"}>
        <span className="close" onClick={this.props.spanClose} >&times;</span>
        <img className="modal-content" id={this.props.imgUrl+"Img"} ref={this.props.imgUrl+"Img"}/>
        <h5 id={this.props.imgUrl+"Caption"} className="caption" ref={this.props.imgUrl+"Caption"}></h5>
      </div>
    )
  }
}