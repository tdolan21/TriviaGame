//Global variables
var intervalId;

//doument ready function
$(document).ready(function() {
$("#timeRemain").text(intervalId)

function start(){
intervalId = setInterval(decrement, 5000);
console.log(intervalId);
}
});
