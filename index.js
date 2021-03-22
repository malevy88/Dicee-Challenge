
// function that creates 1-6 on the left dye
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// turns left dye to corresponding number
if (randomNumber1 === 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}



if (randomNumber1 > randomNumber2) { //if player 1 wins
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) { // if player 2 wins
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else if (randomNumber1 === randomNumber2) { //if it's a tie
    document.querySelector("h1").innerHTML = "A Tie! Try Again";
}
