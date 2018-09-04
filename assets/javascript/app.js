//Global variables
var intervalId;
var timeCount = 60;

//doument ready function
$(document).ready(function() {



// start function for the timer
function start(){
setInterval(decrement, 1000);


}
function decrement(){
timeCount--
console.log(timeCount)
$("#timeRemain").text(timeCount);
}
start();
if (timeCount === 0) {
    stop()
}
//stop and restart function
function stop(){
    
    prompt("You Lose!")
}
function restart(){
    timeCount=60;
    intervalId;
}

});
