import React from 'react';
import GridBox from './gridBox.jsx';

export default class Grid extends React.Component {
  render() {
    let covers = [];
    console.log("this is this.props.state.albumResults", this.props.state.albumResults);
    Object.keys(this.props.state.albumResults).forEach( (link, idx) => {
      console.log("this is eveyr link", link);
      covers.push( <GridBox itunesUrl={link.albumLink} imgUrl={link} key={link + idx}/> )
    })
    return (
      <div className="gridContainer">
        {covers}
      </div>
    )
  }
}
