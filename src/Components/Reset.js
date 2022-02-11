// importing packages to tun react
import React from "react";

/* Reset component which resets the hangman game on a button click , that renders the button and user name
 entered, has synced state and function with Hangman component*/
class Reset extends React.Component {
  /* constructor with props as an argument
    @param props property unique to the component*/
  constructor(props) {
    // extending props from super class
    super(props);
    // binding HandleChange and Reset functions to 'this' keyword
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }
  // reset function that resets the game on button click
  reset() {
    window.location.reload();
  }
  // handleChange function that is synced with handleChange function in Hangman component
  handleChange(e) {
    this.props.onUserChange(e.target.value);
  }

  render() {
    // user prop passed from Hangman component
    let name = this.props.user;

    // returning button to click and user name for rendering
    return (
      <div>
        <button id="reset" onClick={this.reset}>
          Click To Restart
        </button>
        <br />
        <p>Gamer: {name}</p>
      </div>
    );
  }
}

// exporting Reset component to Hangamn component to be rendered
export { Reset };
