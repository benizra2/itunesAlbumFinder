import React from 'react';

export default class GridBox extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.url}/>
      </div>
    )
  }
}
