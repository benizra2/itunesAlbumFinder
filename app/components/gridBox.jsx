import React from 'react';

export default class GridBox extends React.Component {
  render() {
    console.log("this is the props", this.props)
    return(
      <div className="coverAlbum">
        <a href={this.props.itunesUrl} target="_blank"><img src={this.props.imgUrl}/></a>
      </div>
    )
  }
}
