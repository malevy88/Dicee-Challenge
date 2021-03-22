var randomNumber1 = Math.floor(Math.random() * 6) + 1; //picks random number 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //selects dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //selects imagesdice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; //selects image 1
image1.setAttribute("src", randomImageSource); //changes image 1 attribute


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //picks random number 1-6 on dice 2
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //selects dice1.png - dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //selects image 2 and changes attribute


//changes H1 to winner depending on dice roll
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
  document.querySelector("h1").innerHTML = "Draw!"
}
