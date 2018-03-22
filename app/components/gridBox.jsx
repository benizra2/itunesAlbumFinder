import React from 'react';

export default class GridBox extends React.Component {
  render() {
    return(
      <div className="coverAlbum">
        <img src={this.props.url}/>
      </div>
    )
  }
}
