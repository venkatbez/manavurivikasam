// Game code goes here
// Get a random number from 0 to size
var getRandomNumber = function (size) {
 return Math.floor(Math.random() * size);
};


// Calculate distance between click event and target
var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

 // Get a string representing the distance
var getDistanceHint = function (distance) {
 if (distance < 10) {
 return "BOILING HOT!!!";
} else if (distance < 20) {
 return "Really hot";
}else if (distance < 40) {
 return "Hot";
} else if (distance < 80) {
 return "Warm";
} else if (distance < 160) {
 return "Cold";
} else if (distance < 200) {
	return "Pretty cold!";
} else if (distance < 320) {
 return "Really cold!"
} else {
 return "FREEZEING!!!";
 }
};

// Set up our variables
var width = 500;
var height = 500;
var clicks = 0;
var width = 500;
var height = 500;
var clicks = 0;
//Create a random target location
var target = {
x: getRandomNumber(width),
y: getRandomNumber(height)
};

// Add a click handler to the img element
$("#map").click(function (event) {
clicks++;

// Get distance between click event and target
var distance = getDistance(event, target);
// Convert distance to hint
var distanceHint = getDistanceHint(distance);

// Update the #distance element with the new hint
$("#distance").text(distanceHint);

// If the click was close enough, tell them they won
if (distance < 8) {
  alert("You found the treasure in " + clicks + "clicks, AWESOME!");
  clicks = 0;
     	};

if (clicks > 55 && distance >  8) {
	alert(" Oh No " + clicks + " clicks, GAME OVER!");
	clicks = 0;
	   };

 });