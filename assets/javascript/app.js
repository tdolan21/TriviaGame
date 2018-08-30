//Global variables
var intervalId;

//doument ready function
$(document).ready(function() {

//start function for the timer
function start(){
intervalId = setInterval(decrement, 60000);

}

$("#timeRemain").text(intervalId);
});
