const startBtn = document.getElementById("start-btn");

//callback function to start game when button is clicked
const startGame = function () {
  console.log("clicked");
};

// add start btn click event listener
startBtn.addEventListener("click", startGame);
