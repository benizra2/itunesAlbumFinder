import React from 'react';

export default class Info extends React.Component {
  //componenent that displays name of Artist that closely matches the inputted name in the search componenet
  render() {
    return (
      <div>
          <h3>{this.props.state.artistName}</h3>
      </div>
    )
  }
}