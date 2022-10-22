const startBtn = document.getElementById("start-btn");

// function to remove the start container
const removeStartContainer = function () {
  const startContainer = document.getElementById("start-container");

  startContainer.remove();
};
const renderBlankDivs = function (word) {
  // convert word to array
  const wordArray = word.split("");

  // construct word-container div (parent)
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "word-container");
  containerDiv.setAttribute("class", "word-container");

  // for each letter in word array create and append div to parent
  wordArray.forEach(createAndAppendLetter);
};

//callback function to start game when button is clicked
const startGame = function () {
  // remove the start container
  removeStartContainer();

  const word = "hello";

  //render the blank divs
  renderBlankDivs(word);
  //start timer
};

// add start btn click event listener
startBtn.addEventListener("click", startGame);
