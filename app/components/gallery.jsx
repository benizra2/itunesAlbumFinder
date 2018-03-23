import React from 'react';
import CoverFlow from 'coverflow-react';

//***************** NOT USED ***************//
//leveraged Coverflow npm package to produce an image carousel of Album Covers with their titles
export default class Gallery extends React.Component {
  render() {

    let IMAGES = [];
    let LABELS =[];

    //iterates over albumResults object that was passed down via props to fill in the IMAGES and LABELS
    if (this.props.state.albumResults) {
      for (let key in this.props.state.albumResults) {
        IMAGES.push(key)
        LABELS.push(this.props.state.albumResults[key].albumName)
      }
    }

    return (
      <CoverFlow emptyMessage={""}height={200} background={"#ECEDEF"} itemRatio="1:1" imagesArr={IMAGES} labelsArr={LABELS}/> 
    )
  }
}
