import React from 'react';
import Modal from './modal.jsx';
export default class GridBox extends React.Component {
  render() {
    return(
      <div className="coverAlbum">
        {/* <a href={this.props.itunesUrl} target="_blank"><img src={this.props.imgUrl}/></a> */}
        <img 
          src={this.props.imgUrl} 
          id={this.props.imgUrl} 
          onClick={this.props.imgClick}
          alt={this.props.albumName}
        />
        <Modal imgUrl={this.props.imgUrl}/>
      </div>
    )
  }
}
