import React from 'react';
import GridBox from './gridBox.jsx';

export default class Grid extends React.Component {
  render() {
    let covers = [];
    Object.keys(this.props.state.albumResults).forEach( (link, idx) => {
      console.log('this is the link', link);
      covers.push( <GridBox url={link} key={link + idx}/> )
    })
    return (
      <div className="gridContainer">
        {covers}
      </div>
    )
  }
}
