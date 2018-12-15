window.setTimeout(function() {
var button = document.querySelector("button");
var isRed = false;

button.addEventListener("click", function(){
  if(isRed){
       document.body.style.background = "blue";             
  } else {
  	  document.body.style.background = "red";  	  	 
  }
  isRed = !isRed;
})
}, 500);