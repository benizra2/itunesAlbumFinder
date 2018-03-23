import React from 'react';
import GridBox from './gridBox.jsx';

export default class Grid extends React.Component {
  render() {
    let covers = [];
    Object.keys(this.props.state.albumResults).forEach( (link, idx) => {
      covers.push( <GridBox 
                      itunesUrl={this.props.state.albumResults[link].albumLink} 
                      imgUrl={link} 
                      key={link + idx}
                      imgClick={this.props.imgClick}
                      albumName={this.props.state.albumResults[link].albumName}
                      spanClose={this.props.spanClose}
                    /> 
                  )
    })
    return (
      <div className="gridContainer">
        {covers}
      </div>
    )
  }
}
