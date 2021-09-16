import React, { Component } from "react";

class Bomb extends Component {

    constructor(props) { //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
            secondsLeft: props.initialCount
        }
      }

    render() {
        return (
            <h2>
                {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
                {/* {this.state.secondsLeft === 0 ? "Boom!" : "seconds left before I go boom!"} */}

            </h2>
        )
    }
}

export default Bomb;
