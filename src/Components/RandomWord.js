// RandomWord component that has an array of colours and that generates a random colour each time
function RandomWord() {
  // array of different colours
  let Programming_Language = [
    "red",
    "blue",
    "orange",
    "purple",
    "pink",
    "white",
    "black",
    "brown",
    "burgundy",
    "cyan",
    "green",
    "silver",
    "gray",
    "yellow",
    "turquoise",
    "gold",
    "mahogany",
    "indigo",
    "lilac",
    "claret",
  ];
  // returning random colour from the array list
  return Programming_Language[
    Math.floor(Math.random() * Programming_Language.length)
  ];
}

// exporting RandomWord to be used in Hangman.js
export { RandomWord };
