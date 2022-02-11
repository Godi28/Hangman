/* importing packages to run react and manipulate the DOM and create routes 
, importing bootstrap css file, custom css file, the Hangman component from Hangman.js
 and the Help component from Help.js*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Assets/new.css";
import { Hangman } from "./Components/Hangman.js";
import { Help } from "./Components/Help.js";

// component array that holds Help and Hangman components in their routes
let compArray = [
  <Routes key={0}>
    <Route path="/help" exact={true} element={<Help />} />
  </Routes>,
  <Routes key={1}>
    <Route path="/" exact={true} element={<Hangman />} />
  </Routes>,
];

/* List component with props argument that returns a wrapped component ,from the component array, to render
 based on props
 @param props property unique to the component*/
function List(props) {
  return <>{props.value}</>;
}

/* Display component with props argument and a map to call the List component for each 
component in the component array with the value passed to it being an array component
@param props property unique to the component*/
function Display(props) {
  const compArray = props.compArray;
  const listLoop = compArray.map((comp) => <List value={comp} />);
  return <>{listLoop}</>;
}

/* rendering components in the array between BrowserRouter tags through the Display component 
by passing the array to it*/
ReactDOM.render(
  <>
    <BrowserRouter>
      <Display compArray={compArray} />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
