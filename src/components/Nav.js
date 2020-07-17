import piggy from "../porco.png";
import React from "react";

const Nav = props => {

  console.log(props)
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick={() => props.updateState("greased")}>{props.greased ? "NO MORE, I WANNA SEE ALL" : "SHOW ME THE GREASED"}</button>
      <button onClick={() => props.updateState("name")}>{props.name ? "randomize" : "alphabetize"}</button>
      <button onClick={() => props.updateState("weight")}>{props.weight ? "mix em up" : "sort by heft"}</button>
    </div>
  );
};

// button will filter by greaseness

export default Nav;
