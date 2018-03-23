import React from 'react';

export default class Modal extends React.Component {
  render() {
    return(
      <div id={this.props.imgUrl+"Modal"} className="modal" ref={this.props.imgUrl+"Modal"}>
        <span className="close" onClick={this.props.spanClose} >&times;</span>
        <img className="modal-content" id={this.props.imgUrl+"Img"} ref={this.props.imgUrl+"Img"}/>
        <div id={this.props.imgUrl+"Caption"} ref={this.props.imgUrl+"Caption"}></div>
      </div>
    )
  }
}