const startBtn = document.getElementById("start-btn");

// function to remove the start container
const removeStartContainer = function () {
  const startContainer = document.getElementById("start-container");

  startContainer.remove();
};

//callback function to start game when button is clicked
const startGame = function () {
  // remove the start container
  removeStartContainer();
  //render the blank divs
  //start timer
};

// add start btn click event listener
startBtn.addEventListener("click", startGame);
