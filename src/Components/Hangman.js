/*imprting react packages and component from react, Link function from react-router-dom ,
 RandomWord component from Randomword.js, Reset component from Reset.js and 11 images to use
for the hangman game from Assets folder*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RandomWord } from "./RandomWord.js";
import { Reset } from "./Reset.js";
import image1 from "../Assets/state1.GIF";
import image2 from "../Assets/state2.GIF";
import image3 from "../Assets/state3.GIF";
import image4 from "../Assets/state4.GIF";
import image5 from "../Assets/state5.GIF";
import image6 from "../Assets/state6.GIF";
import image7 from "../Assets/state7.GIF";
import image8 from "../Assets/state8.GIF";
import image9 from "../Assets/state9.GIF";
import image10 from "../Assets/state10.gif";
import image11 from "../Assets/state11.GIF";

/* Hangman component that facilitates the hangman game by taking user name, guessing input and printing 
different states of the hangman when user input is incorrect and alerting user of win, loss and guesses
 remaining*/
class Hangman extends Component {
  // default props containg hangman images and maximum allowed guesses
  static defaultProps = {
    maxWrong: 10,
    images: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
    ],
  };
  /* constructor with props as an argument
    @param props property unique to the component*/
  constructor(props) {
    // extending props from super class
    super(props);
    /* setting initial states of number of wrong guesses,user guesses, 
    answer(which a random colour from the RandomWord component) and user name*/
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: RandomWord(),
      user: "",
    };
    // binding HandleChange and HandleGuess functions to 'this' keyword
    this.handleGuess = this.handleGuess.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // function to split and hide letters of the answer colour using a map and '_'
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  /* function to handle user's guess by showing letters guessed right or decreasing 
  total number of guesses for wrong inputs*/
  handleGuess(e) {
    let letter = e.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  // function to handle user name input by setting the user state to the inputted name
  handleChange(e) {
    this.setState({ user: e.target.value });
  }

  // function to generate user input button letters and disable then on click
  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
        className="btn-secondary"
      >
        {letter}
      </button>
    ));
  }

  render() {
    // condition for when number of wrong user guesses is equal or greater than the allowed maximum
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    // condition for when the joined user guessed letters is the same as the answer
    const isWinner = this.guessedWord().join("") === this.state.answer;
    // user name entered
    let user = this.state.user;
    // generated user input letter buttons
    let gameState = this.generateKeypad();

    // control structure for when user wins that alerts them
    if (isWinner) {
      gameState = "Congrats " + user + ", You have won the Game";
    }
    // control structure for when user loses that alerts them
    if (gameOver) {
      gameState = "Better Luck Next Time " + user;
    }
    // html content containing the hangman game to be rendered including the Reset component
    return (
      <div key={1} className="Hangman">
        <nav className="navbar navbar-default">
          <Link className="l" to="/help">
            Help
          </Link>{" "}
        </nav>
        <h1>Hangman</h1>
        <br />
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          Guesses Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the Hidden Colour</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className="Hangman-btns">{gameState}</p>
        <form>
          <input
            type={"text"}
            placeholder="enter your name"
            value={user}
            onChange={this.handleChange}
          />
        </form>
        <br />
        <Reset onUserChange={this.handleChange} user={user} />
      </div>
    );
  }
}

// exporting Hangman component to be rendered in index.js
export { Hangman };
