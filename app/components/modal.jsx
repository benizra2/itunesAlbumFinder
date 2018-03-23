import React from 'react';

export default class Modal extends React.Component {
  render() {
    return(
      <div id={this.props.imgUrl+"Modal"} className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id={this.props.imgUrl+"Img"}/>
        <div id={this.props.imgUrl+"Caption"}></div>
      </div>
    )
  }
}