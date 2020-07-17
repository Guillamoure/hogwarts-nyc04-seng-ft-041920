import React, { Fragment } from "react";
import HogCard from './hog_card'
// import images from '../hog-imgs'

class HogContainer extends React.Component {

  mappingHogs = () => {
    return this.props.hogs.map(hog => <HogCard hog={hog}/>)
  }

  render() {
    return (
      <div id="hog-container">
        {this.mappingHogs()}
      </div>
    );
  }
}

// display all hog cards
// inside HogCards
// map out cards based on the props that we passed in
  // each object is mapped to a new card

export default HogContainer;
