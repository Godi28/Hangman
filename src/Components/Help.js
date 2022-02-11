// importing packages to run react, the Link function from react-router-dom and an image from Assets folder
import React from "react";
import { Link } from "react-router-dom";
import image from "../Assets/hangman.JPG";

/* Help component that return the html content containing instructions on how to play the hangman game 
and a link to the main page*/
function Help() {
  return (
    <div className="help">
      <Link className="l" to="/">
        Game
      </Link>
      <h1 id="inst">Instructions</h1>
      <ul>
        <li>
          Enter your name in the text box provided and you dont have to worry
          about submitting.
        </li>
        <li>
          Guess the hidden colour by clicking on the buttons with letters that
          you think may be in the name of the hidden colour.
        </li>

        <li>
          Once you have clicked a button once it will be disabled so you can't
          click it again. If that particular letter exists in the name you are
          guessing, all occurences of the letter will be shown on the screen.
        </li>
        <li>
          The screen shows how many guesses you have left out of 10 from the
          beginning and as the game progresses.
        </li>
        <li>
          If you click on a letter that does not exist in the hidden colour's
          name then a part of a picture of a stick man hanging from a noose will
          start to appear for every wrong click until finally the whole picture
          is presented signaling the end of the game and a loss.{" "}
        </li>
        <li>
          The game will alert the user as to whether they have won or lost.
        </li>
      </ul>
      <br />
      <img id="hgm" src={image} alt="hangman" />
      <p id="enjoy">Good Luck and Enjoy!!</p>
    </div>
  );
}

// exporting the Help component to be rendered in index.js
export { Help };
