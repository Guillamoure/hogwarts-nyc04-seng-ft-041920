import React from "react";

class HogCard extends React.Component {

  state = {
    front: true
  }

  // const [front, toggleFront] = React.useState(true)
  // toggleFront(!front)
  
  toggleHoggle = () => {
    this.setState({
      front: !this.state.front
    })
    // when click, change state to front or back/true false
  }

  renderHog = () => {
    const { name, greased, specialty, weight } = this.props.hog

    let variable = name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${variable}.jpg`)

    if (this.state.front){
      return (
        <li onClick={this.toggleHoggle}>
          <h3>{name}</h3>
          <img src={pigImage}/>
        </li>
      )
    } else {
      return (
        <li onClick={this.toggleHoggle}>
          <h3>Greased: {greased.toString()}</h3>
          <p>{specialty}</p>
          <p>Medaled: {this.props.hog["highest medal achieved"].toUpperCase()}</p>
          <h2>Weight: {weight}</h2>
        </li>
      )
    }
  }


  render(){
    console.log(this.props.hog)
    // depending on front or back, we display different data
    return (
      <div>
       {this.renderHog()}
      </div>
    )
  }
}

export default HogCard
