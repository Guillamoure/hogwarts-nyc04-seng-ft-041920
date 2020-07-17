import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {

  state = {
    greased: false,
    name: false,
    weight: false
  }

  updateState = (value) => {
    this.setState({
      [value]: !this.state[value]
    })
  }

  renderAllHoggies = () => {
    let hoggies = [...hogs]
    if (this.state.greased){
      hoggies = hoggies.filter(h => h.greased)
    }
    if (this.state.name){
      hoggies = hoggies.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (this.state.weight){
      hoggies = hoggies.sort((a, b) => a.weight - b.weight)
    }

    return hoggies
  }

  render() {
    return (
      <div className="App">
        <Nav updateState={this.updateState} greased={this.state.greased} name={this.state.name} weight={this.state.weight}/>
        <HogContainer hogs={this.renderAllHoggies()}/>
      </div>
    );
  }
}

// create a component with all information

export default App;
