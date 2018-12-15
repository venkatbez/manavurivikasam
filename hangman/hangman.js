//Create an array of words 
var words = [
"javascript",
  "python",
 "code",
 "bugs",
"ones",
"zeros",
"loops",
"games",
"debug",
"robots",
"computers",
"html"
];

//Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

//Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";

}

var remainingLetters = word.length;

//The game loop 
while (remainingLetters > 0) {
 // Show the player their progress
 alert(answerArray.join(" "));

// Get a guess from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
	// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {
 //Update the game state with the guess
for (var j = 0; j < word.length; j++) {
 if (word[j] === guess) {
 answerArray[j] = guess;
 remainingLetters--;
   }
 }
}
//The end of the loop
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " +word);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawStickMan() {
	ctx.fillRect(100, 0, 50, 50);
    ctx.fillRect(120, 50, 10, 30);
    ctx.fillRect(75, 80, 100, 5);
    ctx.fillRect(100, 80, 50, 80);
    ctx.fillRect(140, 160, 10, 80);
    ctx.fillRect(100, 160, 10, 80);
}

drawStickMan();